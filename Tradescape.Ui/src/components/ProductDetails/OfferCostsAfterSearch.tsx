import React, {useState} from 'react'
import {
    Container,
    Col,
    Row
} from 'reactstrap'
import styled from 'styled-components'
import Tooltips from '../ui/Tooltips'
import MyResponsivePie from './ChartForCostsAfterSearch'
import testDataChart from './testDataChart.json'
import './line.css'
import { useSelector } from 'react-redux'
import {ChartDataControler} from './ChartDataControler'
// import './table.css'

const TdHead = styled.td`{
    font-size: 15px;
    text-align: right;
}`
const TdBody = styled.td`{
    font-size: 15px;
    font-weight: 700;
}`

type StateProps = Readonly<{
    reduxLoading: boolean,
    singleCostRenewal: number,
    onePieceCommission: number,
    commission: number,
    price: number
}>

type InitialReduxState =  Readonly<{
    apiAnswerOfferId: any,
    currenState: object,
    data: object,
    loading: boolean,
    singleCostRenewal: number,
    onePieceCommission : number,
    commission: number,
    price: number
}>

const OfferCostsAfterSearch: React.FC = () => {

    const {
        reduxLoading,
        singleCostRenewal,
        onePieceCommission,
        commission,
        price
    } = useSelector<InitialReduxState, StateProps>((state: InitialReduxState) => {
        return {
            reduxLoading: state.apiAnswerOfferId.loading,
            singleCostRenewal: state.apiAnswerOfferId.currentState.data.singleCostRenewal,
            onePieceCommission: state.apiAnswerOfferId.currentState.data.onePieceCommission,
            commission: state.apiAnswerOfferId.currentState.data.commission,
            price: state.apiAnswerOfferId.currentState.data.price
        }
    })

    const allegroValue = Math.round((price - onePieceCommission) / price * 100)
    // console.log(typeof allegroValue)
    // const restValue = 10
    // // ((price - onePieceCommission) / price)
    // console.log(allegroValue)
    // console.log(restValue)

    const initialChartState = {
        rest:  {
            id: "reszta",
            label: "reszta",
            value: 0,
            color: "hsl(103, 70%, 50%)"
        },
        allegro: {
            id: "Allegro",
            label: "Allegro",
            value: 0,
            color: "hsl(48, 70%, 50%)"
        }
    }



    return (
        <div>
            {}
            <Container>
                <br/>
                <br/>
                <Row>

                <Col xs='8'>
                    <Row className="justify-content-center">
                        <Col className="col-auto">
                    <table>
                        <tbody>
                            <tr>
                                <TdHead>Koszty pojedynczego odnowienia:&nbsp;</TdHead>
                                <TdBody>{`${singleCostRenewal !== undefined ? singleCostRenewal : ''} zł`}</TdBody>

                            </tr>
                            <tr>
                                <TdHead>Prowizja od 1 szt.:&nbsp;</TdHead>
                                <TdBody>{`${onePieceCommission !== undefined ? onePieceCommission : ''} zł`}</TdBody>
                            </tr>
                            <tr>
                                <TdHead>Prowizja łącznie:&nbsp;</TdHead>
                                <TdBody>{`${commission !== undefined ? commission : ''} zł`}</TdBody>
                            </tr>
                        </tbody>
                    </table>
                    </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <Col className="col-auto">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                            <th scope="col" style={{textAlign: 'center'}}>Czas</th>
                            <th scope="col" style={{textAlign: 'center'}}>Koszt wystawienia</th>
                            <th scope="col" style={{textAlign: 'center'}}>Prowizja</th>
                            <th scope="col" style={{textAlign: 'center'}}>Koszt razem</th>
                            <th scope="col" style={{textAlign: 'center'}}>Sprzedaż</th>
                            <th scope="col" style={{textAlign: 'center'}}>% prowizji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"  style={{textAlign: 'center'}}>Ostatnie 30 dni</th>
                            <td style={{textAlign: 'center'}}>Mark</td>
                            <td style={{textAlign: 'center'}}>Otto</td>
                            <td style={{textAlign: 'center'}}>@mdo</td>
                            <td style={{textAlign: 'center'}}>@mdo</td>
                            <td style={{textAlign: 'center'}}>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{textAlign: 'center'}}>Ostatnie 60 dni</th>
                            <td style={{textAlign: 'center'}}>Jacob</td>
                            <td style={{textAlign: 'center'}}>Thornton</td>
                            <td style={{textAlign: 'center'}}>@fat</td>
                            <td style={{textAlign: 'center'}}>@fat</td>
                            <td style={{textAlign: 'center'}}>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{textAlign: 'center'}}>Ostatnie 90 dni</th>
                            <td style={{textAlign: 'center'}}>Larry</td>
                            <td style={{textAlign: 'center'}}
                            >the Bird</td>
                            <td style={{textAlign: 'center'}}>@twitter</td>
                            <td style={{textAlign: 'center'}}>@twitter</td>
                            <td style={{textAlign: 'center'}}>@twitter</td>

                            </tr>
                        </tbody>
                    </table>
                    </Col>
                    </Row>
                    <Row className='d-flex justify-content-center' style={{padding: '0 0 10px 0', border: 'solid #dfdfdf', borderWidth: '0 0 1px 0'}}/>
                    <br/>
                    <h5 style={{textAlign: 'center'}}>Historia promocji: <Tooltips/></h5>
                    <h6 style={{textAlign: 'center'}}>(w cyklach po 10 dni)</h6>
                    <br/>

                    <Row className="justify-content-center">
                        <Col className="col-auto" style={{padding: '0'}}>
                            <Row>
                                <div className="line-container" style={{margin: '10px 0 25px 0'}}>
                                    <span className="line arrow-left" style={{width: '50%', textAlign: 'left'}}><div style={{margin: '0 0 0 25px'}}>150 dni temu</div></span>
                                    <span className="line arrow-right" style={{width: '50%', textAlign: 'right'}}><div style={{margin: '0 25px 0 0'}}>obecny cykl</div></span>

                                </div>
                            </Row>
                            <table id="tablePreview" className="table table-sm table-bordered " style={{tableLayout: 'fixed', width: '100%'}}>
                                <thead>
                                    <tr>
                                        <th style={{textAlign: 'right', width: "20%"}}>Cykl:&nbsp;</th>
                                        <th style={{textAlign: 'center'}}>15</th>
                                        <th style={{textAlign: 'center'}}>14</th>
                                        <th style={{textAlign: 'center'}}>13</th>
                                        <th style={{textAlign: 'center'}}>12</th>
                                        <th style={{textAlign: 'center'}}>11</th>
                                        <th style={{textAlign: 'center'}}>10</th>
                                        <th style={{textAlign: 'center'}}>9</th>
                                        <th style={{textAlign: 'center'}}>8</th>
                                        <th style={{textAlign: 'center'}}>7</th>
                                        <th style={{textAlign: 'center'}}>6</th>
                                        <th style={{textAlign: 'center'}}>5</th>
                                        <th style={{textAlign: 'center'}}>4</th>
                                        <th style={{textAlign: 'center'}}>3</th>
                                        <th style={{textAlign: 'center'}}>2</th>
                                        <th style={{textAlign: 'center'}}>1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" style={{textAlign: 'right'}}>Wyróżnienie:&nbsp;</th>
                                        <td style={{backgroundColor: '#92e05c'}}></td>
                                        <td style={{backgroundColor: '#92e05c'}}></td>
                                        <td style={{backgroundColor: '#92e05c'}}></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{textAlign: 'right'}}>Podświetlenie:&nbsp;</th>
                                        <td style={{backgroundColor: '#92e05c'}}></td>
                                        <td style={{backgroundColor: '#92e05c'}}></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{textAlign: 'right'}}>Pogrubienie:&nbsp;</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    </Col>
                <Col style={{height: '300px'}}>
                    <MyResponsivePie
                    data={ChartDataControler(price, onePieceCommission)}
                    />
                </Col>
                </Row>
                <br/>
            </Container>
        </div>
    )
}

export default OfferCostsAfterSearch;