import {
    SEARCH_ENGINE_REQUEST,
    SEARCH_ENGINE_SUCCESS,
    SEARCH_ENGINE_ERROR,
    TAKE_STRING_REQUEST,
    TAKE_REQUEST_TIME
} from '../actions/constants/searchFilteredProductsConstants'

const initialState = {
    currentState: null,
    loading: false,
    error: null,
    stringRequest: null,
    requestTime: null
}

interface Actions {
    type: string,
    currentState: object,
    payload?: string | number,
    loading: boolean,
    error: boolean
}

export const apiSearchEngine = (state = initialState, action: Actions) => {
    switch (action.type) {
        case SEARCH_ENGINE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_ENGINE_SUCCESS:
            return {
                ...state,
                loading: false,
                currentState: action.payload,
                error: null
            }
        case SEARCH_ENGINE_ERROR:
            return {
                ...state,
                loading: false,
                curentState: {},
                error: action.payload
            }
        case TAKE_STRING_REQUEST:
            return {
                ...state,
                stringRequest: action.payload
            }
        case TAKE_REQUEST_TIME:
            return {
                ...state,
                requestTime: action.payload
            }
        default:
            return state
    }
}