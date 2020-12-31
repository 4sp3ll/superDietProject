import {
    SEARCH_ENGINE_REQUEST,
    SEARCH_ENGINE_SUCCESS,
    SEARCH_ENGINE_ERROR,
    TAKE_STRING_REQUEST
} from '../actions/constants/searchFilteredProductsConstants'

const initialState = {
    // currentState: {data: null},
    currentState: null,
    loading: false,
    error: null,
    stringRequest: null
}

interface Actions {
    type: string,
    currentState: object,
    payload?: string,
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
                payload: action.payload
            }
        default:
            return state
    }
}