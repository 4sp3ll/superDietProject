import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { store } from '../index'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../actions/index'

export const SearchFilteredProductsApi = () => {
    const userRequestTable: Array<string> = []
    // to jest źle
    const {minCarbo, minProtein} = store.getState().filtersSearchEngine
    // const {minCarbo, minProtein} = useSelector((state: any) => state.filtersSearchEngine)
    // const dispatch = useDispatch()

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


    // let responseMain: AxiosResponse<any>
    // const goResposne = (response: object) => {dispatch(allActions.searchEngineSuccess(response))}
    // let errorMain: AxiosResponse<any>
    // const goError = (error: string) => {dispatch(allActions.searchEngineError(error))}

    // add values chosen by user to the table
    requestLocalState.forEach((e: any) => {
    if (e[Object.keys(e)[0]] != null || undefined) {
        userRequestTable.push(`${e.payload}${e[Object.keys(e)[0]]}`)
        }
    })

    // change table to string used in axios request
    const userRequestString = userRequestTable.join('&')

    // to jest źle
    // dispatch((arg: (arg0: () => { type: string }) => void) => {
        // dispatch(allActions.searchEngineBegin);
        // axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&${userRequestString}`)
            // .then(response => goResposne(response))
            // .then(response => dispatch(allActions.searchEngineSuccess(response)))
            // .catch(error => goError(error))
            // .catch(error => dispatch(allActions.searchEngineError(error)))
    // })
    store.dispatch((dispatch: Dispatch) => {
        dispatch(allActions.searchEngineBegin());
        axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&${userRequestString}`)
            .then(response => dispatch(allActions.searchEngineSuccess(response)))
            .catch(error => dispatch(allActions.searchEngineError(error)))
    })
}