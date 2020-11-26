import React, {useState} from 'react'
import styled from "styled-components"
import 'rc-slider/assets/index.css'
import {
    Container,
    Col,
    Row,
    Spinner
} from 'reactstrap'
import Test from '../../images/photoTest.jpg'
import Tooltips from '../../components/ui/Tooltips'
import { store } from '../../index'
import { useSelector, connect } from 'react-redux'
import DateCalculator from './DateCalculator'



const WhiteBackground = styled.div`{
    background-color: white;
}
`
const UlList = styled.ul`{
    break-inside: avoid;
    padding: 0 2em 0 2em;
}`

const LiList = styled.li`{
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    list-style-type: none;
    font-size: 16px;
    padding: .2em 0 .2em 0;
}`

const H1 = styled.h1`{
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
}`

const P = styled.p`{
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
    color: #e32727;
}`

const TdHead = styled.td`{
    font-size: 15px;
    text-align: right;
}`
const TdBody = styled.td`{
    font-size: 15px;
    font-weight: 700;
}`

const GreySpan = styled.span`{
    color: '#d1d1d1'
}`


const OfferdetailsAfterSearch: React.FC<any> = props => {

    const data = props.apiAnswerOfferId.currentState.data
    const {
        id, 
        productName, 
        image, 
        superSeller, 
        netValue, 
        commision, 
        sold, 
        revenue, 
        price, 
        category, 
        numberOfTransactions,
        emphasized,
        bold,
        highlight,
        stockAvailable
        } = data
    const isLoading = props.apiAnswerOfferId.loading

    return (
        <div>
            {/* {isLoading ? <Spinner animation="border" /> : null} */}
            <Container >
            <br/> 
            <br/> 
                <Row>        
                    <Col>
                        <img src={image} style={{width: '100%'}}/>                                          
                    </Col>
                    <Col xs='8'>
                        <table>
                            <tbody>
                                <tr>
                                    <TdHead>Tytuł:&nbsp;</TdHead>
                                    <TdBody>{`${productName} (${id})`}</TdBody>                    

                                </tr>
                                <tr>    
                                    <TdHead>Kategoria:&nbsp;</TdHead>
                                    <TdBody>{category}</TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Aktualna cena:&nbsp;</TdHead>
                                    <TdBody><P>{price}</P></TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Wartość sprzedaży:&nbsp;</TdHead>
                                    <TdBody><P>{`${revenue} zł`}</P></TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Ilość transakcji:&nbsp;</TdHead>
                                    <TdBody>{numberOfTransactions}</TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Sprzedanych szt.:&nbsp;</TdHead>
                                    <TdBody>{sold}</TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Obecne promocje:&nbsp;</TdHead>
                                    <TdBody>
                                        {emphasized ? 'Wyróżnienie' : <span style={{color: '#d1d1d1'}}>Wyróżnienie</span>}&nbsp;/&nbsp;
                                        {bold ? 'Pogrubienie' : <span style={{color: '#d1d1d1'}}>Pogrubienie</span>}&nbsp;/&nbsp;
                                        {highlight ? 'Podświetlenie' : <span style={{color: '#d1d1d1'}}>Podświetlenie</span>}
                                        <Tooltips/> 
                                    </TdBody>                               
                                </tr>
                                <tr>
                                    <TdHead>Już trwa:&nbsp;</TdHead>
                                    <TdBody>
                                        <DateCalculator
                                        alreadyRunningOrBeginningDate={true}
                                        />
                                    </TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Data rozpoczęcia:&nbsp;</TdHead>
                                    <TdBody>
                                        <DateCalculator
                                            alreadyRunningOrBeginningDate={false}
                                        />
                                    </TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Marka:&nbsp;</TdHead>
                                    <TdBody></TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Kod producenta:&nbsp;</TdHead>
                                    <TdBody></TdBody>

                                </tr>
                                <tr>
                                    <TdHead>Dostępne:&nbsp;</TdHead>
                                    <TdBody>{`${stockAvailable} szt.`}</TdBody>
                                </tr>

                            </tbody>
                        </table>                    
                    </Col>
                </Row> 
                <br/>
            </Container>
        </div>
    )
}

    interface ToProps {
        state: object,
        apiAnswerOfferId: object
    }

    const mapStateToProps = (state: ToProps) => ({
        apiAnswerOfferId: state.apiAnswerOfferId
    })

    export default connect(mapStateToProps)(OfferdetailsAfterSearch);