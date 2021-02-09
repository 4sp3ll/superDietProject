import React, {useState} from 'react'
import styled from "styled-components"
import 'rc-slider/assets/index.css'
import {
    Container,
    Col,
    Row,
    Spinner
} from 'react-bootstrap'
import { useSelector } from 'react-redux'


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

const Center = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
}`


const ProductDetailsAfterSearch = ({productNumber}: any) => {

    const [photoStatus, setPhotoStatus] = useState(false)
    const [show, setShow] = useState(false)

    const {
        productName,
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
            photoFullSize: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_url,
            brand: state.apiSearchEngineReducer.currentState.data?.products[productNumber].brands,
            servingSize: state.apiSearchEngineReducer.currentState.data?.products[productNumber].serving_size,
            stores: state.apiSearchEngineReducer.currentState.data?.products[productNumber].stores_tags,
            manufactured: state.apiSearchEngineReducer.currentState.data?.products[productNumber].manufacturing_places_tags,
            packagings: state.apiSearchEngineReducer.currentState.data?.products[productNumber].packagings,
            barcode: state.apiSearchEngineReducer.currentState.data?.products[productNumber].code,
        }
    })


    const handlePhotoLoading = () => {
        if (photoStatus && !show) {
            setShow(true)
        } else if (photoStatus && show) {
            return null
        } else {
            return <Center><Spinner animation="border" /></Center>
        }
    }

    return (
        <div>

            <Container >
            <br/>
            <br/>
                <Row>
                    <Col>
                        <div style={{height: '80%'}}>
                            {handlePhotoLoading()}
                            <img
                            style={{maxHeight: '100%', display: 'block', margin: 'auto', visibility: show ? 'visible' : 'hidden'}}
                            src={photoFullSize}
                            onLoad={() => setPhotoStatus(true)}
                            />
                        </div>
                    </Col>
                    <Col xs='8'>
                        <table>
                            <tbody>
                                <tr>
                                    <TdHead>Product name:&nbsp;</TdHead>
                                    <TdBody>{productName ? productName : ''}</TdBody>

                                </tr>
                                <tr>
                                    <TdHead>Serving size:&nbsp;</TdHead>
                                    <TdBody>{servingSize ? servingSize : ''}</TdBody>

                                </tr>
                                <tr>
                                    <TdHead>Brand:&nbsp;</TdHead>
                                    <TdBody>{brand ? brand : ''}</TdBody>

                                </tr>
                                <tr>
                                    <TdHead>Available in:&nbsp;</TdHead>
                                    <TdBody>{stores ? stores.join(', '): ''}</TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Possible made in:&nbsp;</TdHead>
                                    <TdBody>{manufactured ? manufactured.join(', ') : ''}</TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Packaging materials:&nbsp;</TdHead>
                                    <TdBody><P>{packagings ? packagings.map((e: any) => e.material ? e.material.replace('en:', '').replace('en: ', ''): null).join(', ') : ''}</P></TdBody>
                                </tr>
                                <tr>
                                    <TdHead>Barcode:&nbsp;</TdHead>
                                    <TdBody>{barcode ? barcode : ''}</TdBody>
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