import React, { useState, useRef, useEffect } from 'react'
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

    const userRequestTable: Array<string> = []

    const {minCarbo, minProtein, minFat} = useSelector((state: FiltersStatus) => state.filtersSearchEngine)
    const isLoading = useSelector((state: LoadingStatus) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()

        const requestConditions: Array<object> = [
            {
                value: minCarbo,
                fullName: 'carbohydrates'
            },
            {
                value: minProtein,
                fullName: 'proteins',
            },
            {
                value: minFat,
                fullName: 'fats',
            }
        ]

        // TUTAJ ZWRACANE SĄ WSZYSTKIE OBIEKTY, PONIEWAŻ SPRAWDZENIE ZNAJDUJE SIĘ DOPIERO PONIŻEJ


        requestConditions.filter((e: any) => e[Object.keys(e)[0]] !== 'every').forEach((e: any) => {
                    //  0-9 low, 10-15 mid, 16-100 high per 100g
                    if (e.value === 'Low') {
                       userRequestTable.push(`nutriment_${userRequestTable.length}=${e.fullName}
                       &nutriment_compare_${userRequestTable.length}=lte&nutriment_value_${userRequestTable.length}=9`);

                    } else if (e.value === 'Moderate') {
                       userRequestTable.push(`nutriment_${userRequestTable.length}=${e.fullName}
                       &nutriment_compare_${userRequestTable.length}=gte&nutriment_value_${userRequestTable.length}=10`);
                       userRequestTable.push(`nutriment_${userRequestTable.length}=${e.fullName}
                       &nutriment_compare_${userRequestTable.length}=lte&nutriment_value_${userRequestTable.length}=15`)

                    } else if (e.value === 'High') {
                       userRequestTable.push(`nutriment_${userRequestTable.length}=${e.fullName}
                       &nutriment_compare_${userRequestTable.length}=gte&nutriment_value_${userRequestTable.length}=16`);
                    }
        })


            // change table to string used in axios request
            const userRequestString = userRequestTable.join('&')
            console.log(userRequestString)

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

                // PO NACIŚNIĘCIU POWINIEN NASTĄPI RESET conditionsState
                onClick={() => request()}
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