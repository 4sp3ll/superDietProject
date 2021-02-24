import {
    SEARCH_ENGINE_REQUEST,
    SEARCH_ENGINE_SUCCESS,
    SEARCH_ENGINE_ERROR,
    TAKE_STRING_REQUEST,
    TAKE_REQUEST_TIME
} from '../constants/searchFilteredProductsConstants'

export const searchEngineBegin = () => {
    return {
        type: SEARCH_ENGINE_REQUEST,
    }
}

export const searchEngineSuccess = (currentState: object) => {
    return {
        type: SEARCH_ENGINE_SUCCESS,
        payload: currentState
    }
}

export const searchEngineError = (error: string) => {
    return {
        type: SEARCH_ENGINE_ERROR,
        payload: error
    }
}

export const stringRequest = (element: string) => {
    return {
        type: TAKE_STRING_REQUEST,
        payload: element
    }
}

export const requestTime = (element: number) => {
    return {
        type: TAKE_REQUEST_TIME,
        payload: element
    }
}