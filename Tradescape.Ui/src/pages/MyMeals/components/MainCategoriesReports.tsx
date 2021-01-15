import React from 'react'
// import '../ProductDetails/node_modules/rc-slider/assets/index.css'
import styled from 'styled-components'
import {
    Col,
    Container,
    Row
} from 'reactstrap'
import PageAlert from '../../ui/PageAlert'
import CategoriesDropdown from './CategoriesDropdown'
import CategoriesPriceInput from './CategoriesPriceInput'
import CategoriesWordsInput from './CategoriesWordsInput'
import CategoriesDateInput from './CategoriesDateInput'
import CategoriesPromotionButton from './CategoriesPromotionButton'
import CategoriesFindButton from '../containers/CategoriesFindButton'
import DateRange from './DateRange'

const WhiteBackground = styled.div`{
    background-color: white;
}
`

const blurElement = styled.div`{
    backdrop-filter: blur(2px);
}`

const MainCategoriesReports: React.FC = () => {

    return (
        <>
            <Container  id='tutorial-container'>
                <PageAlert
                displayRibbon={false}
                />
            </Container>
            <div className='d-flex justify-content-center' id='main-categories-reports-container'>
                <div style={{height: '105vh'}}></div>
                {/* <div className='search-offers-main-shadow' style={{width: '85%', height: '150%'}}> */}
                <div style={{width: '85%'}}>
                    <WhiteBackground style={{width: '99%', height: '90%'}}>
                    <div className='search-offers-main-shadow' style={{width: '100%', height: '90%'}}>
                        <div style={{height: '300px'}}>
                        <Container fluid={true} ></Container>
                        </div>
                        </div>
                        </WhiteBackground>
                </div>


                {/* <div className='search-offers-main-shadow' style={{width: '25%', height: '150%'}}>
                <WhiteBackground style={{width: '100%', height: '150%'}}>
                    <div style={{height: '450px'}}>
                    <fieldset disabled={true}>

                        <Container>
                            <Col >
                                    <div  id='categories-dropdown' style={{padding: '30px 15px 15px 0', display:'block'}}>
                                        <h2>Coming soon...</h2>
                                        <p style={{padding: '0 0 6px 0', textAlign: 'left', fontSize: '16px'}}>Filter by:</p>
                                        <div style={{borderBottom: '2px solid grey', height: '3px', width: '100%', margin: '5px 0 15px 0'}}/>
                                        <CategoriesDropdown />
                                    </div>
                                    <div  id='categories-date' style={{ padding: '15px 5px 15px 0', margin: '0 5px 0 0'}}>
                                        <DateRange/>
                                    </div>
                                    <div  id='categories-words' style={{display:'inline-block', padding: '10px 15px 15px 0', width: '100%'}}>
                                        <div style={{margin: '0 0 5px 0'}}>
                                            <CategoriesWordsInput
                                            id='words-plus'
                                            placeholder='Zawiera słowa'
                                            />
                                        </div>
                                        <div>
                                            <CategoriesWordsInput
                                            id='words-minus'
                                            placeholder='Nie zawiera słów'
                                            />
                                        </div>
                                    </div>
                                    <Row style={{padding: '10px 15px 15px 0'}}>
                                        <Col sm={6} style={{padding: '0 5px 0 15px'}}>
                                            <div style={{padding: '0 0 5px 0'}}>
                                                <CategoriesPriceInput
                                                id='min-price'
                                                placeholder='cena min.'
                                                />
                                            </div>
                                            <div>
                                                <CategoriesPriceInput
                                                id='max-price'
                                                placeholder='cena max.'
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6} style={{padding: '0 15px 0 0'}}>
                                            <CategoriesPromotionButton/>
                                        </Col>
                                    </Row>
                            </Col>
                            <CategoriesFindButton/>
                        </Container>

                        </fieldset>
                        </div>
                    </WhiteBackground>
                    </div> */}

                </div>

        </>
    )
}

export default MainCategoriesReports