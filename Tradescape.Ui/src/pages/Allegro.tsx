import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
// import './ProductDetails/node_modules/rc-slider/assets/index.css';
import PageAlert from './ui/PageAlert'
import Tooltips from './ui/Tooltips'
import Main from './SearchEngine/containers/Main'
import TableResult from './SearchEngine/components/TableResult'
import {
    MinPriceInput,
    MaxPriceInput,
    MinNetInput,
    MaxNetInput,
    MinSalesUnitsInput,
    MaxSalesUnitsInput,
    MinRevenueInput,
    MaxRevenueInput,
    MinCommissionInput,
    MaxCommissionInput,
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
// import './ribbon.css';
import Test from './Test'

export interface AllegroTestProps {

}

export interface AllegroTestState {

}

const ElementsMargin = styled.div`{
    margin: 7px 0px 7px 0px;

}`
const P = styled.p`{
    text-align: center;
    margin: 0 0 2px 0;

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

const ProductPhoto = styled.div`{
    margin: 0 0 0 30px;
    width: 156px;
    display: block;
    float: left;
    border: 1px solid #ccc;
}`

const ProductInfo = styled.div`{
    margin: 5px;
    width: 300px;
    display: inline-block;
    float: left;
}`
const ProductFees = styled.div`{
    margin: 5px;
    width: 400px;
    top: 0px;
    display: inline-block;
}`
const ProductButtons = styled.div`{
    margin: 5px;
    width: 100px;
    display: inline-block;

}`

class AllegroTest extends React.Component<AllegroTestProps, AllegroTestState> {
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
                <Test/>
                <div className='search-offers-main-shadow'>
                    <WhiteBackground >
                        <Container fluid={true} id='h-container'>
                            <Row className='top-shadow-bar'>
                                <Col>
                                    <ElementsMargin>
                                            <h4>Znajdź dochodowy produkt na Allegro</h4>
                                    </ElementsMargin>
                                </Col>
                                <Col>
                                    <ElementsMargin style={{ float: 'right' }}>
                                        <ButtonGroup>
                                            <Button as={NewButton} className='black-white-button'>Zapisz filtr</Button>{' '}
                                            <Button className='black-white-button'>Załaduj filtr</Button>{' '}
                                        </ButtonGroup>
                                    </ElementsMargin>
                                </Col>
                            </Row>
                        </Container >
                        <Container fluid={true} class='filterbox-container'>
                            <Row >
                                <Col sm={5} id='filterbox-categories-column' className='search-offers-categories-box'>
                                    <Row style={{ height: '1em' }}/>
                                        <h2 style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold', margin: '0 0 1em 0' }}> Kategorie </h2>
                                        <Tooltips style={{ display: 'inline-block' }}></Tooltips>
                                    <Main></Main>
                                </Col>
                                <Col id='filterbox-filter-column' style={{ border: 'solid #dfdfdf', borderWidth: '.5px 1px 1px 1px', borderBottomRightRadius: '0.25rem' }}>
                                    <Row style={{ height: '1em' }}></Row>
                                    <div>
                                        <h2 style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold' }}> Filtry </h2>
                                        <Tooltips style={{ display: 'inline-block' }}></Tooltips>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-3 ml-2 mt-2 mx-md-0 mt-md-0'> <Label for="minPrice"><FontAwesomeIcon icon={['fas', 'dollar-sign']} size="2x" className='search-offers-icons' /></Label></div>
                                            <MinPriceInput></MinPriceInput>
                                            <div className='search-offers-input-dash'>&nbsp;-&nbsp;</div>
                                            <MaxPriceInput></MaxPriceInput>
                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-3 mr-md-0 mt-md-0'><Label for="minNet"><FontAwesomeIcon icon={['fas', 'coins']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <MinNetInput></MinNetInput>
                                            <div className='search-offers-input-dash'>&nbsp;-&nbsp;</div>
                                            <MaxNetInput></MaxNetInput>

                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-2 mr-md-0 mt-md-0'><Label for="minSale"><FontAwesomeIcon icon={['fas', 'chart-line']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <MinSalesUnitsInput></MinSalesUnitsInput>
                                            <div className='search-offers-input-dash'>&nbsp;-&nbsp;</div>
                                            <MaxSalesUnitsInput></MaxSalesUnitsInput>

                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-2 mr-md-0 mt-md-0'><Label for="minRevenue"><FontAwesomeIcon icon={['fas', 'wallet']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <MinRevenueInput></MinRevenueInput>
                                            <div className='search-offers-input-dash'>&nbsp;-&nbsp;</div>
                                            <MaxRevenueInput></MaxRevenueInput>

                                        </div>
                                    </div>
                                    <div className='search-offers-input-wrapper'>
                                        <div className="form-inline">
                                            <div className='search-offers-input mr-4 mt-2 mr-md-0 mt-md-0'><Label for="minCommission"><FontAwesomeIcon icon={['fas', 'percent']} size="2x" style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }} /></Label></div>
                                            <MinCommissionInput></MinCommissionInput>
                                            <div className='search-offers-input-dash'>&nbsp;-&nbsp;</div>
                                            <MaxCommissionInput></MaxCommissionInput>

                                        </div>
                                    </div>
                                    <br />
                                    <Row>
                                        <Col>
                                            <div className="form-inline" >
                                                <div style={{ paddingRight: '20px' }}><Label for="includeKeyword" >Zawiera słowa:</Label></div>
                                                <ContainsWords></ContainsWords>
                                            </div>
                                            <div className="form-inline">
                                                <div style={{ paddingRight: '4px' }}><Label for="excludeKeyword">Nie zawiera słów:</Label></div>
                                                <DoesntContainsWords></DoesntContainsWords>
                                            </div>
                                            <div className="form-inline" style={{ height: '30px' }}/>
                                        </Col>
                                        <Col>
                                            <SupersellerFilter></SupersellerFilter>
                                        </Col>
                                    </Row>
                                    <div id="searchDiv">
                                        <Row>
                                            <Col xs='8' md='9' className='d-inline-block' style={{ padding: "0 0 0 15px" }}>
                                                <Button className='float-right' color="secondary" style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#ffffff", color: "#000000" }}>Resetuj filtr</Button>
                                            </Col>
                                            <Col xs='4' md='3'>
                                                <FindButton></FindButton>
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
                <TableResult></TableResult>

                <br />
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