import React, { useState } from 'react'
import {Button, Spinner} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import allActions from '../actions/index'

type FiltersStatus = {
    state: object,
    filtersSearchEngine: {
        minCarbo: string,
        minProtein: string,
        minFat: string
    }
}

type LoadingStatus = {
    state: object,
    apiSearchEngineReducer: {
    loading: boolean
    }
}

const SearchFilteredProducts = () => {
    const [stateAmount, setStateAmount] = useState(0)
    const userRequestTable: Array<string> = []

    const {minCarbo, minProtein, minFat} = useSelector((state: FiltersStatus) => state.filtersSearchEngine)
    const isLoading = useSelector((state: LoadingStatus) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()
        // const [conditionsState, setConditionsState] = useState(requestConditions)

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
            {
                minFat,
                payload: quantity(minFat, 'fat') // fat OR fats
            },
            // do uzupełnienia min/max net
            // do uzupełnienia mix/max sprzedanych szt.
            // do uzupełniania min/max obrót
            // do uzupełnienia min/max % prowizji
        ]

          // POTRZEBUJESZ  TUTAJ LICZNIKA DODATKOWYCH nutrimentów, tak aby dodawać kolejne do zapytania. Jak to zrobić skoro to nie jest komponent?

        // add values chosen by user to the table
        requestConditions.forEach((e: any) => {
            // if (e[Object.keys(e)[0]] != null || undefined || 'every') {
            if (e[Object.keys(e)[0]] !== "every") {
                userRequestTable.push(`${e.payload}`)
                // jeżeli obiekt jest zapełniony to +1, rerender i znowu, jeżeli obiekt jest zapełniony to +1

                }
            })

        const numberOfActiveConditions = () => requestConditions.filter((el: any) => el[Object.keys(el)[0]] !== "every").length
            // setStateAmount(stateAmount + 1)
        // console.log(requestConditions.filter((el: any) => el[Object.keys(el)[0]] !== "every").length)

            // change table to string used in axios request
            const userRequestString = userRequestTable.join('&')

            const request = () => {
            dispatch(allActions.searchEngineBegin())
            axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&${userRequestString}`)
                .then(response => dispatch(allActions.searchEngineSuccess(response)))
                .catch((error: string) => dispatch(allActions.searchEngineError(error)))
            }


    return (
    <div>
        {
            isLoading ?

            <Button
            color="success"
            style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320" }}
            disabled
            >
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                &nbsp;Loading...
            </Button>
            :
            <Button
                color="success"
                style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320" }}
                // do zmiany, nie powinien być zwracany cały store
                // onClick={() => SearchFilteredProductsApi(minCarbo, minProtein, dispatch)}
                onClick={() => request()}
                // onClick={() => {
                //     dispatch(allActions.searchEngineBegin());
                //     axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&nutriment_0=carbohydrates&nutriment_compare_0=lt&nutriment_value_0=50`)
                //     // &${userRequestString}
                //         .then(response => dispatch(allActions.searchEngineSuccess(response)))
                //         .catch((error: string) => dispatch(allActions.searchEngineError(error)))
                // }}
                // onClick={() => SearchFilteredProductsApi()}
            >
                Search
            </Button>
            }
    </div>
    )
}

// interface StateProps {
//     filtersSearchEngine: any,
//     minCarbo: string,
//     minProtein: string,
//     apiSearchEngineReducer: {
//         loading: boolean
//     }
// }

// const mapStateToProps = (state: StateProps) => ({
//     loading: state.apiSearchEngineReducer.loading,
//     minCarbo: state.filtersSearchEngine.minCarbo,
//     minProtein: state.filtersSearchEngine.minProtein

// })

// export default connect(mapStateToProps)(SearchFilteredProducts)

export default SearchFilteredProducts