import React, {useState} from 'react'
import styled from 'styled-components'
import 'rc-slider/assets/index.css'
import PageAlert from '../../ui/PageAlert'
import {
    Container,
    Row,
    Input,
    Button
} from 'reactstrap'
import OfferDetailsAfterSearch from './OfferDetailsAfterSearch'
import ProductIngredientsAfterSearch from '../components/ProductIngredientsAfterSearch'
import TabsElement from '../../ui/Tabs'
import { store } from '../../../index'
import {useSelector} from 'react-redux'
import {OfferDataFetch} from './OfferDataFetch'

import OfferDetailsFindButton from './OfferDetailsFindButton'

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

type Props = Readonly<{
    idIsChosen: boolean,
    chosenCategoryId: number | null,
    reload: boolean,
    pattern: RegExp
}>

type StateProps = Readonly<{
    productName: string,
    productId: number,
    offerDetailsIdChosen: boolean
}>

type InitialReduxState = {
    apiAnswerOfferId: any,
    currentState: object,
    data: object,
    productName: string,
    offerDetailsReducer: any,
    offerDetailsIdChosen?: boolean
}

const OfferDetailsPage: React.FC<Props> = () => {

     const initialState = {
        idIsChosen: true,
        chosenCategoryId: null,
        reload: false,
        pattern: new RegExp("^\\d{10}$")
    }

    const [state, setState] = useState(initialState)
    const { productName, productId, offerDetailsIdChosen } = useSelector<InitialReduxState, StateProps>((state: InitialReduxState) => {
        return {
            productName: state.apiAnswerOfferId.currentState.data.productName,
            productId : state.apiAnswerOfferId.currentState.data.id,
            offerDetailsIdChosen: state.offerDetailsReducer.offerDetailsIdChosen
        }
    });


    // const handlerInputValidation = (e: React.MouseEvent & {value: }) => {
    //     if(e.target.value.match(state.pattern)){
    //         setState({...state, idIsChosen: !state.idIsChosen})
    //         setState({...state, chosenCategoryId: e.target.value})
    //  }
    // }

    const handlerReload = () => {
        setState({...state, reload: true})
    }

    const changeWidth = () => {
        if (offerDetailsIdChosen === true) {
            return '85%'
        } else return '50%'
    }

        return (
            <>
                {/* <Container  id='tutorial-container' style={{width: changeWidth()}}>
                    <PageAlert
                    displayRibbon={false}
                    />
                </Container>

                {
                    offerDetailsIdChosen && (productName && productId !== undefined)  ?

                    <div className='d-flex justify-content-center'>
                        <div style={{height: '105vh'}}></div>
                        <div className='search-offers-main-shadow' style={{width: '85%', height: '150%'}}>
                            <WhiteBackground style={{width: '100%', height: '150%'}}>
                                <Container >
                                    <br/>
                                    <Row className='d-flex justify-content-center'>
                                        <Input
                                        id='offer-details-input'
                                        style={{width: '30em'}}
                                        autocomplete="off"
                                        onChange={(e) => {
                                            const action = {
                                                type: 'OFFER_DETAILS_ID',
                                                payload: {
                                                    offerDetailsId: e.target.value
                                                }
                                            }
                                            store.dispatch(action)
                                        }}
                                        // onChange={e => {
                                        //     if (e.target.value.match(/^\s*(?:\S\s*){10}$/)){
                                        //     this.handlerInputValidation(e)
                                        //     } else {
                                        //         this.setState({idIsChosen: false})
                                        //     }
                                        // }}
                                        />
                                        <OfferDetailsFindButton/>
                                    </Row>
                                    <br/>
                                    <Row  className='d-flex justify-content-center'>
                                        <p><TdBody>{`Wybrane: ${productName ? productName : ''} (${productId ? productId : ''}) `}</TdBody></p>
                                    </Row>
                                    <br/>
                                    <TabsElement
                                    tabPane1={<OfferDetailsAfterSearch/>}
                                    tabPane2={<ProductIngredientsAfterSearch/>}
                                    />
                                </Container>
                            </WhiteBackground>

                        </div>
                        <div style={{height: '100px'}}/>
                    </div>

                    :

                    <div className='d-flex justify-content-center'>
                        <div className='search-offers-main-shadow' style={{width: '50%'}}>
                            <WhiteBackground style={{width: '100%', height: '20em'}}>
                                <Container>
                                    <br/>
                                    <Row className='d-flex justify-content-center' style={{padding: '0 0 10px 0', border: 'solid #dfdfdf', borderWidth: '0 0 1px 0'}}>
                                        <h4 style={{textAlign: 'center'}}>Poznaj szczegóły oferty</h4>
                                    </Row>
                                    <br/>
                                    <Row className='d-flex justify-content-center'><p style={{padding: '0 0 10px 0', fontSize: '1.2em'}}>Wprowadź nr oferty albo link</p></Row>
                                    <Row className='d-flex justify-content-center'>
                                        <Input
                                        id='offer-details-input'
                                        style={{width: '30em'}}
                                        autocomplete="off"
                                        onChange={(e) => {
                                            const action = {
                                                type: 'OFFER_DETAILS_ID',
                                                payload: {
                                                    offerDetailsId: e.target.value
                                                }
                                            }
                                            store.dispatch(action)
                                        }}
                                        // onChange={e => {
                                        //     if (e.target.value.match(/^\s*(?:\S\s*){10}$/)){
                                        //     this.handlerInputValidation(e)
                                        //     } else {
                                        //         this.setState({idIsChosen: false})
                                        //     }
                                        // }}
                                        />
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row  className='d-flex justify-content-center'>
                                        <OfferDetailsFindButton/>
                                    </Row>
                                </Container>
                            </WhiteBackground>
                        </div>
                    </div>
                } */}
                <ProductIngredientsAfterSearch/>
            </>
        );
    }

export default OfferDetailsPage