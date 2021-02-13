import React from 'react'
import { Container, Card } from 'react-bootstrap'
import PageAlert from '../../../ui/PageAlert'
import DayTable from './DayTable'
import YourProportions from './YourProportions'

const MainCategoriesReports = () => {

    return (
        <>
            <Container  id='tutorial-container'>
                <PageAlert
                displayRibbon={false}
                />
            </Container>
            <Card style={{width: '100%', boxShadow: '0 0 10px 2px #ababab'}}>
                <Container fluid={true} >
                    <YourProportions />
                    <DayTable/>
                </Container>
            </Card>
        </>
    )
}

export default MainCategoriesReports