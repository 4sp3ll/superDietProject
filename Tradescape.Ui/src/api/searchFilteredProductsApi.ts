import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch, connect } from 'react-redux'
import allActions from '../actions/index'
import { store } from '..'
import {
    searchEngineBegin,
    searchEngineError,
    searchEngineSuccess
} from '../actions/searchFilteredProductsActions'


// prawdopodobnie problem polega na tym, że jest to funkcja która nic nie zwraca, a nie komponent i używamy tutuaj hooków



const SearchFilteredProductsApi = (minCarbo: string, minProtein: string, dispatch: any) => {
    const userRequestTable: Array<string> = []
    // to jest źle
    // const {minCarbo, minProtein} = useSelector((state: any) => state.filtersSearchEngine)
    // const dispatch = useDispatch()
    console.log('klik')
    const requestLocalState: Array<object> = [
        {
            minCarbo,
            payload: 'PriceFrom='
        },
        {
            minProtein,
            payload: 'PriceTo='
        },
        // do uzupełnienia min/max net
        // do uzupełnienia mix/max sprzedanych szt.
        // do uzupełniania min/max obrót
        // do uzupełnienia min/max % prowizji
    ]

    // add values chosen by user to the table
    requestLocalState.forEach((e: any) => {
        if (e[Object.keys(e)[0]] != null || undefined) {
            userRequestTable.push(`${e.payload}${e[Object.keys(e)[0]]}`)
            }
        })

        // change table to string used in axios request
        const userRequestString = userRequestTable.join('&')

    dispatch(searchEngineBegin())
    axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&nutriment_0=carbohydrates&nutriment_compare_0=lt&nutriment_value_0=50`)
        .then(response => dispatch(searchEngineSuccess(response)))
        .catch((error: string) => dispatch(searchEngineError(error)))


}


export default SearchFilteredProductsApi