import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import ProductElementMobile from './ProductElementMobile'
import ProductElement from './ProductElement'

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
        <tbody >
        {products !== null && products.data.products.map((element: any, index: number) =>
            <tr id={element.id}>
                {mobile ?
                <ProductElementMobile
                index={index}
                element={element}
                />
                :
                <ProductElement
                index={index}
                element={element}
                />
                }
            </tr>
            )
        }
        </tbody>
        </>
    )
}

export default ChosenProductsList