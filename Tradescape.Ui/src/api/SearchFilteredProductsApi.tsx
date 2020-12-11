import axios from 'axios'
import { store } from '../index'
import { Dispatch } from 'redux'
import { useSelector } from 'react-redux'

export const SearchFilteredProductsApi = () => {
    const userRequestTable: Array<string> = []
    // to jest źle
    // const {minPriceValue, maxPriceValue} = store.getState().filtersStore
    const {minCarbo, minProtein} = useSelector((state: any) => state.filtersSearchEngine)

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

    // to jest źle
    store.dispatch((dispatch: Dispatch) => {
        dispatch(fetchFiltersBegin());
        axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&${userRequestString}`)
            .then(response => dispatch(fetchFiltersSuccess(response)))
            .catch(error => dispatch(fetchFiltersError(error)))
    })
}

// const SEARCH_ENGINE_REQUEST = 'SEARCH_ENGINE_REQUEST'
// const SEARCH_ENGINE_SUCCESS = 'SEARCH_ENGINE_SUCCESS'
// const SEARCH_ENGINE_ERROR = 'SEARCH_ENGINE_ERROR'

// const fetchFiltersBegin = () => {
//     return {
//         type: SEARCH_ENGINE_REQUEST,
//     }
// }

// const fetchFiltersSuccess = (currentState: object) => {
//     return {
//         type: SEARCH_ENGINE_SUCCESS,
//         payload: currentState
//     }
// }

// const fetchFiltersError = (error: string) => {
//     return {
//         type: SEARCH_ENGINE_ERROR,
//         payload: error
//     }
// }

const initialState = {
    currentState: {data: null},
    loading: false,
    error: null
}

interface Actions {
    type: string,
    currentState: object,
    payload?: string,
    loading: boolean,
    error: boolean
}

export const apiAnswer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case SEARCH_ENGINE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_ENGINE_SUCCESS:
            return {
                loading: false,
                currentState: action.payload,
                error: null
            }
        case SEARCH_ENGINE_ERROR:
            return {
                loading: false,
                curentState: {},
                error: action.payload
            }
        default:
            return state
    }
}