import {
    SEARCH_ENGINE_REQUEST,
    SEARCH_ENGINE_SUCCESS,
    SEARCH_ENGINE_ERROR
} from '../actions/constants/searchFilteredProductsConstants'

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

export const apiSearchEngineReducer = (state = initialState, action: Actions) => {
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