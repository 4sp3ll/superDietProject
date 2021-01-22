import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import PageAlert from '../../ui/PageAlert'
import Tooltips from '../../ui/Tooltips'
import Main from './Main'
import TableResult from '../components/TableResult'
import {
    MinSalt,
    MaxSalt,
    MinFiber,
    MaxFiber,
    ContainWords,
    ShopTag,
    LabelsFilter,
} from './FilterInputs'
import SearchFilteredProducts from '../../../api/SearchFilteredProducts'

import {
    Button,
    Container,
    Row,
    Col,
    ButtonGroup,
    Label,
    Pagination,
    PaginationItem,
    PaginationLink,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import './Allegro.css'
import DropdownUniversal from '../../ui/DropdownUniversal'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../../../actions/index'
import allNotes from '../../../utils/infoNotes/index'
import ChosenProductsList from './ChosenProductsList';
import {Table} from 'reactstrap';
import SearchEnginePagination from './SearchEnginePagination'
import { yourProportionsToDatabase } from '../../../firebase/yourProporitonsDatabase'
import { yourProportionFromDatabase } from '../../../firebase/yourProporitonsDatabase'
import TooltipItem from '../../ui/Tooltips'

const ElementsMargin = styled.div`{
    margin: 7px 0px 7px 0px;

}`

const WhiteBackground = styled.div`{
    background-color: white;
}
`
const NewButton = styled.div`{
    &.button {
        background-color: #FFFFFF
    }
}`

const ProportionInput = styled.input`{
    width: 5vw;
    height: 30px;
    margin: 5px;
}`

const DailyDoseDiv = styled.div`{
    & > input {display: inline-block;}
}`


const SearchEngineMainView = (props: any) => {
    const [mobileState, setMobileState] = useState(false)
    const [state, setState] = useState ({value: ''})

    const dispatch = useDispatch()

    const uid = useSelector((state: any) => state.firebase.auth.uid)
    const yourProportionData = useSelector((state: any) => state.yourProportions)
    const resultsAmount = useSelector((state: any) => state.apiSearchEngineReducer.currentState?.data.count)

    const [stateFirebase, setStateFirebase] = useState(yourProportionFromDatabase(uid))

    // const takeYourProportions = () => {
    //     setState(yourProportionFromDatabase(uid))
    // }

    if (window.innerWidth < 600 && mobileState !== true) {
        setMobileState(true)
    } else if (window.innerWidth >= 600 && mobileState !== false)  {
        setMobileState(false)
    }

    const handleChange = (e: { target: HTMLInputElement; }) => {
        setState({ value: e.target.value });
    }

        return (
            <>
                <Container fluid={true} id='tutorial-container'>
                    <PageAlert
                    displayRibbon={true}
                    />
                </Container>
                <div className='search-offers-main-shadow'>
                    <WhiteBackground >
                        <Container fluid={true} id='h-container'>
                            <Row className='top-shadow-bar' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Col>
                                    <ElementsMargin>
                                            <h4>Search from ~37000 packaged products on United Kingdom's market</h4>
                                    </ElementsMargin>
                                </Col>
                                <Col md='4'>
                                    <ElementsMargin>
                                            <InputGroup size='sm'>
                                                {/* {console.log(yourProportionFromDatabase(uid))} */}

                                                {/* {`Data: ${yourProportionFromDatabase(uid)}`} */}
                                                {`Data: ${stateFirebase}`}

                                                <Input
                                                placeholder="Your carbs"
                                                onChange={(e) => dispatch(allActions.yourCarbo(e.target.value))}
                                                />
                                                <Input
                                                placeholder="Your protein"
                                                onChange={(e) => dispatch(allActions.yourProtein(e.target.value))}
                                                />
                                                <Input
                                                placeholder="Your fat"
                                                onChange={(e) => dispatch(allActions.yourFat(e.target.value))}
                                                />
                                                <Input
                                                placeholder="Your salt"
                                                onChange={(e) => dispatch(allActions.yourSalt(e.target.value))}
                                                />
                                                <Input
                                                placeholder="Kcal"
                                                onChange={(e) => dispatch(allActions.yourKcal(e.target.value))}
                                                />
                                                <InputGroupAddon addonType="append">
                                                    <Button
                                                    color="secondary"
                                                    onClick={() => {yourProportionsToDatabase(uid, yourProportionData)}}>
                                                        Remember
                                                    </Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                    </ElementsMargin>
                                </Col>
                                <Col md="2">
                                    <ElementsMargin style={{ float: 'right' }}>
                                        <ButtonGroup>
                                            <Button as={NewButton} className='black-white-button'>Save filter</Button>{' '}
                                            <Button className='black-white-button'>Load filter</Button>{' '}
                                        </ButtonGroup>
                                    </ElementsMargin>
                                </Col>
                            </Row>
                        </Container >
                        <Container fluid={true} class='filterbox-container'>
                            <Row>
                                <Col sm={5} id='filterbox-categories-column' className='search-offers-categories-box'>
                                    <Row style={{ height: '1em' }}/>
                                        <h2 style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold', margin: '0 0 1em 0' }}> Categories </h2>
                                        <Tooltips
                                        style={{ display: 'inline-block' }}
                                        />
                                    <Main/>
                                </Col>
                                <Col id='filterbox-filter-column' style={{ border: 'solid #dfdfdf', borderWidth: '.5px 1px 1px 1px', borderBottomRightRadius: '0.25rem'}}>
                                    <Row style={{ height: '1em' }}></Row>
                                    <div>
                                        <h2 style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold' }}> Filters </h2>
                                        <Tooltips style={{ display: 'inline-block' }}></Tooltips>
                                    </div>
                                    <Row>
                                    <Col sm="6">
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 40px 0 40px'}}>
                                                <Label>
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'carrot']}
                                                    size="2x"
                                                    className='search-offers-icons'
                                                    />
                                                </Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0'}}>
                                                    <DropdownUniversal
                                                    nutrition='Carbohydrates'
                                                    />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 40px 0 40px'}}>
                                                <Label>
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'cheese']}
                                                    size="2x"
                                                    style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }}
                                                    />
                                                </Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0'}}>
                                                <DropdownUniversal
                                                nutrition='Proteins'
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 40px 0 40px'}}>
                                                <Label>
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'universal-access']}
                                                    size="2x"
                                                    style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }}
                                                    />
                                                </Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0'}}>
                                                <DropdownUniversal
                                                nutrition='Fats'
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 40px 0 40px'}}>
                                                <Label for="minRevenue">
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'mortar-pestle']}
                                                    size="2x"
                                                    style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }}
                                                    />
                                                </Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0'}}>
                                                <Row>
                                                    <Col sm='6'>
                                                        <MinSalt/>
                                                    </Col>
                                                    <Col sm='6'>
                                                        <MaxSalt/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 40px 0 40px'}}>
                                                <Label for="minCommission">
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'broom']}
                                                    size="2x"
                                                    style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }}
                                                    />
                                                </Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0'}}>
                                                <Row>
                                                    <Col sm='6'>
                                                        <MinFiber/>
                                                    </Col>

                                                    <Col sm='6'>
                                                        <MaxFiber/>
                                                        {/* <Tooltips
                                                        style={{ display: 'inline-block' }}
                                                        infoTitle="Note:"
                                                        info={allNotes.FiberNote}
                                                        /> */}
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                    <br />
                                    <Row style={{margin: '0 0 10px 0'}}>
                                                <Col sm='4' style={{padding: '0', display: 'flex', alignItems: 'center', textAlign: 'right'}}>
                                                    <div className="form-inline"  >
                                                        <Label for="shopTag">Shop tag:</Label>
                                                    </div>
                                                </Col >
                                                <Col  sm='7' style={{padding: '0'}}>
                                                <ShopTag/>
                                                </Col>
                                            </Row>
                                    <Row style={{margin: '0 0 10px 0'}}>
                                        <Col sm='4' style={{padding: '0', display: 'flex', alignItems: 'center'}}>
                                            <div className="form-inline"  >
                                                <Label for="containWords">Product keyword:</Label>
                                            </div>
                                        </Col>
                                        <Col sm='7' style={{padding: '0'}}>
                                            <ContainWords/>
                                        </Col>
                                    </Row>
                                    </Col>

                                    <Col sm="6">
                                            <LabelsFilter
                                            name="Organic tag:"
                                            type='organic'
                                            />
                                            <LabelsFilter
                                            name="Vegetarian tag:"
                                            type='vegetarian'
                                            />
                                            <LabelsFilter
                                            name="No added sugar tag:"
                                            type='sugar'
                                            />
                                            <LabelsFilter
                                            name="No preservatives tag:"
                                            type='preservatives'
                                            />
                                            <LabelsFilter
                                            name="No artificial colors tag:"
                                            type='colors'
                                            />
                                            <LabelsFilter
                                            name="No artificial flavors tag:"
                                            type='flavors'
                                            />
                                    </Col>
                                        </Row>
                                    <div id="searchDiv">
                                        <Row>
                                            <Col xs='8' md='9' className='d-inline-block' style={{ padding: "0 0 0 15px" }}>
                                                <Button className='float-right' color="secondary" style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#ffffff", color: "#000000" }}>Reset</Button>
                                            </Col>
                                            <Col xs='4' md='3'>
                                                <SearchFilteredProducts/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {resultsAmount ? <h4 style={{padding: '0 0 0 2vw'}}>Results: {resultsAmount}</h4> : ''}
                                        </Row>
                                    </div>
                                    <br />
                                </Col>
                            </Row>
                        </Container>
                    </WhiteBackground>
                </div>
                <br />

                <div style={{ marginTop: "0.7rem" }}></div>
                <div style={{ boxShadow: '0 0 6px .5px #777', borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem', borderBottomLeftRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}>
                    <WhiteBackground>
                        <Table bordered>
                            <TableResult
                            mobile={mobileState}
                            />
                            <ChosenProductsList
                            mobile={mobileState}
                            />
                        </Table>
                    </WhiteBackground>
                </div>
                <br />
                <SearchEnginePagination
                />
                <br/>
            </>
        );
}

export default SearchEngineMainView