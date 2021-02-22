import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Container, Row, Col, Form, Button, Table, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

import PageAlert from '../../../ui/PageAlert'
import TakeCategories from './TakeCategories'
import TableResult from '../components/TableResult'
import { MinSalt, MaxSalt, MinFiber, MaxFiber, ContainWords, ShopTag, LabelsFilter } from './FilterInputs'
import SearchFilteredProducts from '../../../api/SearchFilteredProducts'
import '../../../ui/searchEngine.css'
import DropdownUniversal from '../../../ui/DropdownUniversal'
import ChosenProductsList from './ChosenProductsList';
import SearchEnginePagination from './SearchEnginePagination'
import  TooltipInfo  from '../../../ui/Tooltips'
import allNotes from '../../../utils/infoNotes'
import ResetButton from './ResetButton'

const ElementsMargin = styled.div`{
    margin: 7px 0px 7px 0px;
}`


const SearchEngineMainView = () => {

    const [mobileState, setMobileState] = useState(false)
    const resultsAmount = useSelector((state: any) => state.apiSearchEngineReducer.currentState?.data.count)

    if (window.innerWidth < 600 && mobileState !== true) {
        setMobileState(true)
    } else if (window.innerWidth >= 600 && mobileState !== false)  {
        setMobileState(false)
    }

        return (
            <>
                <Container fluid={true} id='tutorial-container'>
                    <PageAlert
                    displayRibbon={true}
                    />
                </Container>
                    <Card style={{width: '100%', boxShadow: '0 0 10px 2px #ababab'}}>
                        <Container fluid={true} id='h-container'>
                            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '2.5px solid #DFDFDF', padding: '10px 0'}}>
                                <Col>
                                    <ElementsMargin>
                                            <h4>Search from more than 40.000 packaged products on United Kingdom's market</h4>
                                    </ElementsMargin>
                                </Col>
                            </Row>
                        </Container >
                        <Container fluid={true} className='filterbox-container' >
                            <Row>
                                <Col sm={5} id='filterbox-categories-column'style={{borderRight: '2.5px solid #DFDFDF'}} >
                                    <Row style={{ height: '1em' }}/>
                                        <h2 style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold', margin: '0 0 1em 0' }}> Categories </h2>{' '}
                                        <TooltipInfo
                                        key='categories'
                                        placement='right'
                                        id='main-categories-info'
                                        message={allNotes.categoriesNote()}
                                        iconSize='lg'
                                        />
                                    <TakeCategories/>
                                </Col>
                                <Col id='filterbox-filter-column' >
                                    <Row style={{ height: '1em' }}></Row>
                                    <div className='filters-title' style={{position: 'relative'}}>
                                        <h2 style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold' }}> Filters </h2>{' '}
                                        <TooltipInfo
                                        key='filters'
                                        placement='right'
                                        id='main-filter-info'
                                        message={allNotes.filtersNote()}
                                        iconSize='lg'
                                        />
                                    </div>
                                    <Row>
                                    <Col sm="6">
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 2rem 0 3rem'}}>
                                                <Form.Label>
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'carrot']}
                                                    size="2x"
                                                    className='search-offers-icons'
                                                    />
                                                </Form.Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0 .5rem'}}>
                                                    <DropdownUniversal
                                                    nutrition='Carbohydrates'
                                                    />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 2rem 0 3rem'}}>
                                                <Form.Label>
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'cheese']}
                                                    size="2x"
                                                    style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }}
                                                    />
                                                </Form.Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0 .5rem'}}>
                                                <DropdownUniversal
                                                nutrition='Proteins'
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 2rem 0 3rem'}}>
                                                <Form.Label>
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'universal-access']}
                                                    size="2x"
                                                    style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }}
                                                    />
                                                </Form.Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0 .5rem'}}>
                                                <DropdownUniversal
                                                nutrition='Fats'
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 2rem 0 3rem'}}>
                                                <Form.Label>
                                                    <FontAwesomeIcon
                                                    icon={['fas', 'mortar-pestle']}
                                                    size="2x"
                                                    style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em ' }}
                                                    />
                                                </Form.Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0 .5rem'}}>
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
                                            <Col sm='1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 2rem 0 3rem'}}>
                                                <Form.Label>
                                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                        <FontAwesomeIcon
                                                        icon={['fas', 'broom']}
                                                        size="2x"
                                                        style={{ color: "white", stroke: "#DCDCDC", strokeWidth: "30", fontSize: '1.9em '}}
                                                        />
                                                        <div style={{position: 'absolute', margin: ' 20px 0 0 30px'}}>
                                                            <TooltipInfo
                                                            key='fiber'
                                                            placement='right'
                                                            id='fiber-info'
                                                            message={allNotes.fiberNote()}
                                                            iconSize='lg'
                                                            />
                                                        </div>
                                                    </div>
                                                </Form.Label>
                                            </Col>
                                            <Col sm='9' style={{padding: '0 .5rem'}}>
                                                <Row>
                                                    <Col sm='6'>
                                                        <MinFiber/>
                                                    </Col>

                                                    <Col sm='6'>
                                                        <MaxFiber/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                    <br />
                                    <Row style={{margin: '0 0 10px 0', padding: '0 .5rem'}}>
                                        <Col sm='4' style={{display: 'flex', alignItems: 'center'}}>
                                            <div className="form-inline" style={{ margin: 'auto 0 auto auto'}} >
                                                <Form.Label>Shop tag:</Form.Label>
                                            </div>
                                        </Col >
                                        <Col  sm='7' style={{padding: '0'}}>
                                        <ShopTag/>
                                        </Col>
                                    </Row>
                                    <Row style={{margin: '0 0 10px 0', padding: '0 .5rem'}}>
                                        <Col sm='4' style={{display: 'flex', alignItems: 'center'}}>
                                            <div className="form-inline" style={{ margin: 'auto 0 auto auto'}}>
                                                <Form.Label>Keyword:</Form.Label>
                                            </div>
                                        </Col>
                                        <Col sm='7' style={{padding: '0'}}>
                                            <ContainWords/>
                                        </Col>
                                    </Row>
                                    </Col>

                                    <Col sm="6">
                                        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
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
                                        </div>
                                    </Col>
                                        </Row>
                                    <div id="searchDiv" style={{padding: '2rem .8rem'}}>
                                        <Row>
                                            <Col xs={8} md={9} className='d-inline-block' style={{ padding: "0 0 0 15px" }}>
                                                <ResetButton/>
                                            </Col>
                                            <Col xs={4} md={3}>
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
                </Card>
                <br />
                    <Card style={{width:'100%', marginTop: '0.7rem', boxShadow: '0 0 10px 2px #ababab'}}>
                        <Table bordered style={{width: '100%'}}>
                            <TableResult
                            mobile={mobileState}
                            />
                            <ChosenProductsList
                            mobile={mobileState}
                            />
                        </Table>
                    </Card>
                <br />
                <SearchEnginePagination
                />
                <br/>
            </>
        );
}

export default SearchEngineMainView