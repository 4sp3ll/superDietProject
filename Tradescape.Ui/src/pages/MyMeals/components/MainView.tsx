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

import DayTable from './DayTable'

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
                        <Container fluid={true} >
                            <DayTable/>
                        </Container>
                        </div>
                        </div>
                        </WhiteBackground>
                </div>
            </div>

        </>
    )
}

export default MainCategoriesReports