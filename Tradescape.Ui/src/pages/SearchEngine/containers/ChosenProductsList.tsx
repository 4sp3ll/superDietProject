import React from 'react'
import { useSelector } from 'react-redux'
import AdditionalOptionsButton from '../components/AdditionalOptionsButton'
import AdditionalOptionsButtonMobile from '../components/AdditionalOptionsButtonMobile'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'

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

const Td = styled.td`{
    text-align: center;
    vertical-align: middle;
}`


const ChosenProductsList = ({mobile}: any) => {
    const products = useSelector((state: State) => state.apiSearchEngineReducer.currentState)
    const isLoading = useSelector((state: State) => state.apiSearchEngineReducer.loading)

    const isThereNumber = (el: string, digitsAfterDecimal: number) => el !== undefined ? `${Number(el).toFixed(digitsAfterDecimal)}g` : ''
    const isThereString = (el: string) => el ? el : ''

    return (
        <>
        {isLoading ? <Spinner animation="border" /> : ''}
        {products !== null && products.data.products.length === 0 ? <h4>{'No data: No product matches to the query OR Quaries to database have 30s timeout, so your quarie is too general or OpenFood Database are too loaded at this moment. Try to chose specific category or back here later.'}</h4>: null}
        <tbody>
        {products !== null ? products.data.products.map((element: any) =>
            <tr id={element.id}>
                {mobile ?
                <>
                <td>
                    <button>+</button>
                </td>
                <td style={{textAlign: 'center'}} >
                    <img src={`${element.image_front_thumb_url}`}/>
                </td>
                <td>{`${element.product_name} - ${isThereString(element.brands)} ${isThereString(element.serving_size)}`}</td>
                <td>
                    <div style={{ position: "relative", }}>
                        <AdditionalOptionsButtonMobile/>
                    </div>
                </td>
                </>
                :
                <>
                <Td>
                    <button>+</button>
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
                <Td>{`${(element.allergens).replace('en:', '').replace(',en:', '')}`}</Td>
                <Td>
                    {`${element.stores_tags}`}
                </Td>
                <Td>
                    <div style={{ position: "relative", }}>
                    <AdditionalOptionsButton/>
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