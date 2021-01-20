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
import Tooltips from '../../ui/Tooltips'
import { store } from '../../../index'
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


const ProductDetailsAfterSearch = ({productNumber}: any) => {

    const {
        productName,
        photoThumb,
        photoFullSize,
        brand,
        servingSize,
        stores,
        manufactured,
        packagings,
        barcode
    } = useSelector((state: any) => {
        return {
            productName: state.apiSearchEngineReducer.currentState.data?.products[productNumber].product_name,
            photoThumb: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_thumb_url,
            photoFullSize: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_url,
            brand: state.apiSearchEngineReducer.currentState.data?.products[productNumber].brands,
            servingSize: state.apiSearchEngineReducer.currentState.data?.products[productNumber].serving_size,
            stores: state.apiSearchEngineReducer.currentState.data?.products[productNumber].stores_tags,
            manufactured: state.apiSearchEngineReducer.currentState.data?.products[productNumber].manufacturing_places_tags,
            packagings: state.apiSearchEngineReducer.currentState.data?.products[productNumber].packagings,
            barcode: state.apiSearchEngineReducer.currentState.data?.products[productNumber].code,
        }
    })

    const isThereString = (el: string) => el ? el : ''

    return (
        <div>

            <Container >
            <br/>
            <br/>
                <Row>
                    <Col>
                        {/* <img src={photoFullSize} style={{width: '100%'}}/> */}
                        <div style={{height: '80%'}}>
                            <img style={{maxHeight: '100%', display: 'block', margin: 'auto'}} src={photoFullSize}/>
                        </div>
                    </Col>
                    <Col xs='8'>
                        <table>
                            <tbody>
                                <tr>
                                    <TdHead>Product name:&nbsp;</TdHead>
                                    <TdBody>{productName}</TdBody>

                                </tr>
                                <tr>
                                    <TdHead>Serving size:&nbsp;</TdHead>
                                    <TdBody>{servingSize}</TdBody>

                                </tr>
                                <tr>
                                    <TdHead>Brand:&nbsp;</TdHead>
                                    <TdBody>{brand}</TdBody>

                                </tr>
                                <tr>
                                    <TdHead>Available in:&nbsp;</TdHead>
                                    <TdBody>{stores.join(', ')}</TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Possible made in:&nbsp;</TdHead>
                                    <TdBody>{manufactured.join(', ')}</TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Packaging materials:&nbsp;</TdHead>
                                    <TdBody><P>{packagings.map((e: any) => e.material ? e.material.replace('en:', '').replace('en: ', ''): null).join(', ')}</P></TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Barcode:&nbsp;</TdHead>
                                    <TdBody>{barcode}</TdBody>
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


    export default ProductDetailsAfterSearch