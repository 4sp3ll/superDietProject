import axios from 'axios'
import { store } from '../../../index'
import { Dispatch } from 'redux'

export const FetchFilters = () => {
    const userRequestTable: Array<string> = []
    const {minPriceValue, maxPriceValue} = store.getState().filtersStore

    const requestLocalState: Array<object> = [
        {
            minPriceValue,
            payload: 'PriceFrom='         
        },
        {
            maxPriceValue,
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
    
    store.dispatch((dispatch: Dispatch) => {
        dispatch(fetchFiltersBegin());
        axios.get(`${process.env.REACT_APP_API}/api/offers?CategoryId=308341&${userRequestString}`)
            .then(response => dispatch(fetchFiltersSuccess(response)))
            .catch(error => dispatch(fetchFiltersError(error)))
    })
}

const FETCH_CATEGORIES_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_CATEGORIES_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_CATEGORIES_ERROR = 'FETCH_USER_ERROR'

const fetchFiltersBegin = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST,
    }
}

const fetchFiltersSuccess = (currentState: object) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: currentState
    }
}

const fetchFiltersError = (error: string) => {
    return {
        type: FETCH_CATEGORIES_ERROR,
        payload: error
    }
}

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
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                currentState: action.payload,
                error: null
            }
        case FETCH_CATEGORIES_ERROR:
            return {
                loading: false,
                curentState: {},
                error: action.payload
            }
        default:
            return state
    }
}