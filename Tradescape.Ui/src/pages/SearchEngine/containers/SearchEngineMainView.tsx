import * as React from 'react';
import { useState  } from 'react'
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
} from '../components/FilterInputs'
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
} from 'reactstrap';
import './Allegro.css'
import DropdownUniversal from '../../ui/DropdownUniversal'
import { useDispatch } from 'react-redux'
import allActions from '../../../actions/index'
import allNotes from '../../../utils/infoNotes/index'


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


const SearchEngineMainView = (props: any) => {

    const [state, setState] = useState ({value: ''})
    const dispatch = useDispatch()

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
                            <Row className='top-shadow-bar'>
                                <Col>
                                    <ElementsMargin>
                                            <h4>Find your products</h4>
                                    </ElementsMargin>
                                </Col>
                                <Col md='6'>
                                    <ElementsMargin style={{float: 'right' }}>
                                        <h5 style={{display: 'inline-block'}}>Your daily dose:  </h5>
                                        <ProportionInput
                                        placeholder="Your carbo"
                                        onChange={(e) => dispatch(allActions.yourCarbo(e.target.value))}
                                        />
                                        <ProportionInput placeholder="Your protein"
                                        onChange={(e) => dispatch(allActions.yourProtein(e.target.value))}
                                        />
                                        <ProportionInput placeholder="Your fat"
                                        onChange={(e) => dispatch(allActions.yourFat(e.target.value))}
                                        />
                                        <ProportionInput placeholder="Your salt"
                                        onChange={(e) => dispatch(allActions.yourSalt(e.target.value))}
                                        />
                                        <ProportionInput placeholder="Kcal"
                                        onChange={(e) => dispatch(allActions.yourKcal(e.target.value))}
                                        />
                                        <label htmlFor='rememberProportion' style={{margin: '0 5px 0 15px'}}>remember</label>
                                        <input
                                        type="checkbox"
                                        id="rememberProportion"
                                        />
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
                                    <Main></Main>
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
                                                    {/* <Col sm='2'>
                                                    <div className='search-offers-input-dash'>&nbsp;:&nbsp;</div>
                                                    </Col> */}

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
                                                    {/* <Col sm='2'>
                                                    <div className='search-offers-input-dash'>&nbsp;:&nbsp;</div>
                                                    </Col> */}

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
                                                        {/* <div style={{textAlign: 'right'}}><p>Shop tag:</p></div> */}
                                                        {/* <Label for="includeKeyword"></Label> */}
                                                    </div>
                                                </Col >
                                                <Col  sm='7' style={{padding: '0'}}>
                                                <ShopTag/>
                                                </Col>
                                            </Row>
                                            <Row style={{margin: '0 0 10px 0'}}>
                                                <Col sm='4' style={{padding: '0', display: 'flex', alignItems: 'center'}}>
                                                    <div className="form-inline"  >
                                                        <Label for="containWords">Contain words:</Label>
                                                        {/* <div><p>Contain words:</p></div> */}
                                                        {/* <div><Label for="includeKeyword" >Contain words:</Label></div> */}
                                                    </div>
                                                </Col>
                                                <Col sm='7' style={{padding: '0'}}>
                                                <ContainWords/>
                                                </Col>
                                    </Row>
                                    </Col>

                                    <Col sm="6">
                                            <LabelsFilter
                                            name="No preservatives:"
                                            radioButtonContainer='preservatives'
                                            />
                                            <LabelsFilter
                                            name="Organic:"
                                            radioButtonContainer='organic'
                                            />
                                            <LabelsFilter
                                            name="No added sugar:"
                                            radioButtonContainer='no-sugar'
                                            />
                                            <LabelsFilter
                                            name="No artificial colors:"
                                            radioButtonContainer='no-colors'
                                            />
                                            <LabelsFilter
                                            name="No artificial flavors:"
                                            radioButtonContainer='no-flavors'
                                            />
                                            <LabelsFilter
                                            name="Vegetarian:"
                                            radioButtonContainer='vegetarian'
                                            />
                                    </Col>


                                        </Row>
{/*
                                        <Col style={{padding: '0'}}>
                                            <Row style={{margin: '0 0 10px 0'}}>
                                                <Col sm='2' style={{padding: '0', display: 'flex', alignItems: 'center'}}>
                                                    <div className="form-inline"  >
                                                        <div><Label for="includeKeyword">Shop tag:</Label></div>
                                                    </div>
                                                </Col>
                                                <Col sm='3' style={{padding: '0'}}>
                                                <ContainsWords/>
                                                </Col>
                                            </Row>
                                            <Row style={{margin: '0 0 10px 0'}}>
                                                <Col sm='2' style={{padding: '0', display: 'flex', alignItems: 'center'}}>
                                                    <div className="form-inline"  >
                                                        <div><Label for="includeKeyword" >Contain words:</Label></div>
                                                    </div>
                                                </Col>
                                                <Col sm='3' style={{padding: '0'}}>
                                                <ContainsWords/>
                                                </Col>
                                            </Row>
                                        </Col> */}

                                    <div id="searchDiv">
                                        <Row>
                                            <Col xs='8' md='9' className='d-inline-block' style={{ padding: "0 0 0 15px" }}>
                                                <Button className='float-right' color="secondary" style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#ffffff", color: "#000000" }}>Reset</Button>
                                            </Col>
                                            <Col xs='4' md='3'>
                                                <SearchFilteredProducts/>
                                            </Col>
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
                <TableResult/>
                {/* <SearchFilteredProductsApi/> */}
                <br />
                {/* to leci do osobnego komponentu */}
                        <div className='outer'>
                            <div className='inner'>
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink first href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink previous href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            4
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            5
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink last href="#" />
                                    </PaginationItem>
                                </Pagination>


                                </div>
                            </div>
            </>
        );
}



// const mapStateToProps = (state: any) => {

// }

// const mapDispatchToProps = (dispatch: any) => {
//     yourCarbo: (e: any) => dispatch(yourCarbo(e))
// }

// export default AllegroTest;
export default SearchEngineMainView