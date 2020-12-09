import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import PageAlert from './ui/PageAlert'
import Tooltips from './ui/Tooltips'
import Main from './SearchEngine/containers/Main'
import TableResult from './SearchEngine/components/TableResult'
import {
    MinSalt,
    MaxSalt,
    MinRoughage,
    MaxRoughage,
    ContainsWords,
    DoesntContainsWords,
    SupersellerFilter,
} from './FilterInputs'
import FindButton from './SearchEngine/containers/FindButton'

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
import './Allegro.css';
import DropdownUniversal from './ui/DropdownUniversal'


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


class AllegroTest extends React.Component {
    constructor(props: any) {
    super(props)
    this.state = {
        value: '',
        }
     }

    handleChange(e: { target: HTMLInputElement; }) {
        this.setState({ value: e.target.value });
    }

    render() {
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
                                <Col>
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
                                        <Tooltips style={{ display: 'inline-block' }}></Tooltips>
                                    <Main></Main>
                                </Col>
                                <Col id='filterbox-filter-column' style={{ border: 'solid #dfdfdf', borderWidth: '.5px 1px 1px 1px', borderBottomRightRadius: '0.25rem'}}>
                                    <Row style={{ height: '1em' }}></Row>
                                    <div>
                                        <h2 style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold' }}> Filters </h2>
                                        <Tooltips style={{ display: 'inline-block' }}></Tooltips>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-3 ml-2 mt-2 mx-md-0 mt-md-0'> <Label for="minPrice"><FontAwesomeIcon icon={['fas', 'carrot']} size="2x" className='search-offers-icons' /></Label></div>
                                            <DropdownUniversal
                                            nutrition='Carbohydrates'
                                            />
                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-3 mr-md-0 mt-md-0'><Label for="minNet"><FontAwesomeIcon icon={['fas', 'cheese']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <DropdownUniversal
                                            nutrition='Proteins'
                                            />

                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-2 mr-md-0 mt-md-0'><Label for="minSale"><FontAwesomeIcon icon={['fas', 'universal-access']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <DropdownUniversal
                                            nutrition='Fats'
                                            />

                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-2 mr-md-0 mt-md-0'><Label for="minRevenue"><FontAwesomeIcon icon={['fas', 'mortar-pestle']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <MinSalt/>
                                            <div className='search-offers-input-dash'>&nbsp;-&nbsp;</div>
                                            <MaxSalt/>

                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-2 mr-md-0 mt-md-0'><Label for="minCommission"><FontAwesomeIcon icon={['fas', 'broom']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <MinRoughage/>
                                            <div className='search-offers-input-dash'>&nbsp;-&nbsp;</div>
                                            <MaxRoughage/>

                                        </div>
                                    </div>
                                    <br />
                                    <Row>
                                        <Col>
                                            <div className="form-inline" >
                                                <div><Label for="includeKeyword" >Contain words:</Label></div>
                                                <ContainsWords/>
                                            </div>
                                            {/* <div className="form-inline">
                                                <div style={{ paddingRight: '4px' }}><Label for="excludeKeyword">Nie zawiera słów:</Label></div>
                                                <DoesntContainsWords/>
                                            </div> */}
                                            <div className="form-inline" style={{ height: '30px' }}/>
                                        </Col>
                                        <Col>
                                            <SupersellerFilter/>
                                        </Col>
                                    </Row>
                                    <div id="searchDiv">
                                        <Row>
                                            <Col xs='8' md='9' className='d-inline-block' style={{ padding: "0 0 0 15px" }}>
                                                <Button className='float-right' color="secondary" style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#ffffff", color: "#000000" }}>Reset</Button>
                                            </Col>
                                            <Col xs='4' md='3'>
                                                <FindButton/>
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
}

export default AllegroTest;