import React, { useState } from 'react'
import axios from 'axios'
import {
    searchEngineBegin,
    searchEngineError,
    searchEngineSuccess
} from '../actions/searchFilteredProductsActions'
import TableResult from '../pages/SearchEngine/components/TableResult'



const SearchFilteredProductsApi = (minCarbo: string, minProtein: string, dispatch: any) => {
    // const [stateAmount, setStateAmount] = useState(0)
    const userRequestTable: Array<string> = []
    // to jest źle
    // const {minCarbo, minProtein} = useSelector((state: any) => state.filtersSearchEngine)
    // const dispatch = useDispatch()
    // const [conditionsState, setConditionsState] = useState()

    const quantity = (el: string, fullName: string) => {
         //  0-9 low, 10-15 mid, 16-100 high per 100g
        if (el === 'Low') {
            return `nutriment_0=${fullName}&nutriment_compare_0=lte&nutriment_value_0=9`
        } else if (el === 'Moderate') {
            return `nutriment_0=${fullName}&nutriment_compare_0=gte&nutriment_value_0=10&nutriment_1=${fullName}&nutriment_compare_1=lte&nutriment_value_1=15`
        } else if (el === 'High') {
            return `nutriment_0=${fullName}&nutriment_compare_0=gte&nutriment_value_0=16`
        }
    }


    const requestConditions: Array<object> = [
        {
            minCarbo,
            payload: quantity(minCarbo, 'carbohydrates')
        },
        {
            minProtein,
            payload: quantity(minProtein, 'proteins')
        },
        // do uzupełnienia min/max net
        // do uzupełnienia mix/max sprzedanych szt.
        // do uzupełniania min/max obrót
        // do uzupełnienia min/max % prowizji
    ]

      // POTRZEBUJESZ  TUTAJ LICZNIKA DODATKOWYCH nutrimentów, tak aby dodawać kolejne do zapytania. Jak to zrobić skoro to nie jest komponent?

    // add values chosen by user to the table
    requestConditions.forEach((e: any) => {
        if (e[Object.keys(e)[0]] != null || undefined || 'every') {
            userRequestTable.push(`${e.payload}`)
            // userRequestTable.push(`${e.payload}${e[Object.keys(e)[0]]}`)
            // setStateAmount(state => state + 1)
            }
        })

        // change table to string used in axios request
        const userRequestString = userRequestTable.join('&')
        dispatch(searchEngineBegin())
        axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&${userRequestString}`)
            .then(response => dispatch(searchEngineSuccess(response)))
            .catch((error: string) => dispatch(searchEngineError(error)))

}


export default SearchFilteredProductsApi