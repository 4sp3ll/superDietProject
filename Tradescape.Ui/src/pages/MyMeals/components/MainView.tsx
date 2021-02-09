import React from 'react'
import styled from 'styled-components'
import {
    Container
} from 'react-bootstrap'
import PageAlert from '../../../ui/PageAlert'
import DayTable from './DayTable'
import YourProportions from './YourProportions'

const WhiteBackground = styled.div`{
    background-color: white;
}
`

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
                <div style={{width: '85%'}}>
                    <WhiteBackground style={{width: '99%', height: '90%'}}>
                    <div className='search-offers-main-shadow' style={{width: '100%', height: '90%'}}>
                        <div style={{height: '300px'}}>
                        <Container fluid={true} >
                            <YourProportions />
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