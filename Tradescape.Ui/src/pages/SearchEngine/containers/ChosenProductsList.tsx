import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import ProductDetails from '../../ProductDetails/containers/ProductDetails'
import AddProduct from './AddProduct'

const Td = styled.td`{
    text-align: center;
    vertical-align: middle;
}`

const Center = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
}`

interface State {
    filtersSearchEngine: any,
    flag: boolean,
    state: object,
    apiSearchEngineReducer: any,
    currentState: object | null,
    data: object,
    products: object,
    loading: boolean
}

const ChosenProductsList = ({mobile}: any) => {
    const products = useSelector((state: State) => state.apiSearchEngineReducer.currentState)
    const isLoading = useSelector((state: State) => state.apiSearchEngineReducer.loading)
    const requestTime = useSelector((state: State) => state.apiSearchEngineReducer.requestTime)

    const [photoStatus, setPhotoStatus] = useState(false)
    const [show, setShow] = useState(false)

    const isThereNumber = (el: string, digitsAfterDecimal: number) => el !== undefined ? `${Number(el).toFixed(digitsAfterDecimal)}g` : ''
    const isThereString = (el: string) => el ? el : ''

    const handlePhotoLoading = () => {
        if (photoStatus && !show) {
            setShow(true)
        } else if (photoStatus && show) {
            return null
        } else {
            return <Center><Spinner animation="grow"  /></Center>
        }
    }

    return (
        <>
        {isLoading && <div><Spinner animation="grow"/>{' '}<h3 style={{display: 'inline-block'}}>Loading...</h3></div>}
        {products !== null && products.data.products.length === 0 ?
        <h4>
            {`No data:
            ${requestTime > 30000 ? `Your query took ${(requestTime/1000).toFixed(2)}s and then I received an error from database. Maximum timout for the query is 30s.
            That is mean that the OpenFood Database is too loaded at this momement or your query is too complex.
            Try to simplify your search (first of all try to choose specific categories) or back here later.` : `No product matches to the query`}`}
        </h4>
        : null}
        <tbody>
        {products !== null ? products.data.products.map((element: any, index: number) =>
            <tr id={element.id}>
                {mobile ?
                <>
                <td>
                    <AddProduct
                    productNumber={index}
                    />
                </td>
                <td style={{textAlign: 'center'}} >
                    {handlePhotoLoading()}
                    <img
                    style={{maxHeight: '100%', display: 'block', margin: 'auto', visibility: show ? 'visible' : 'hidden'}}
                    src={element.image_front_thumb_url}
                    onLoad={() => setPhotoStatus(true)}
                    />
                </td>
                <td>{`${element.product_name_en ? element.product_name_en : element.product_name} - ${isThereString(element.brands)} ${isThereString(element.serving_size)}`}</td>
                <td>
                    <div style={{ position: "relative", }}>
                        <ProductDetails
                        productNumber={index}
                        />
                    </div>
                </td>
                </>
                :
                <>
                <Td>
                    <AddProduct
                    productNumber={index}
                    />
                </Td>
                <Td >
                    <img src={`${element.image_front_thumb_url}`}/>
                </Td>
                <Td>
                    {`${element.product_name} - ${isThereString(element.brands)} ${isThereString(element.serving_size)}`}
                </Td>
                <Td>
                    {`${isThereNumber(element.nutriments.carbohydrates_100g, 2)}`}
                    <br/>
                    {`including`}
                    <br/>
                    {`sugar: ${isThereNumber(element.nutriments.sugars_100g, 1)}`}
                </Td>
                <Td>{`${isThereNumber(element.nutriments.proteins_100g, 2)}`}</Td>
                <Td>{`${isThereNumber(element.nutriments.fat_100g, 2)}`}</Td>
                <Td>{`${isThereNumber(element.nutriments.salt, 1)}`}</Td>
                <Td>{isThereNumber(element.nutriments.fiber_value, 1)}</Td>
                <Td>
                    {`${element.allergens_tags ?
                    element.allergens_tags.map((e: any) => e ? e.replace('en:', '').replace(',en:', '').replace('de:', '').replace('fr:', '') : null)
                    .join(', ') : null}`}
                </Td>
                <Td>
                    {`${element.stores_tags ?
                        element.stores_tags.map((e: any) => e ? e.replace('en:', '').replace('en: ', ''): null)
                        .join(', '): null}`}
                </Td>
                <Td>
                    <div style={{ position: "relative", }}>
                        <ProductDetails
                        productNumber={index}
                        />
                    </div>
                </Td>
                </>
                }
            </tr>
        )
        :
        null}
        </tbody>
        </>
    )
}

export default ChosenProductsList