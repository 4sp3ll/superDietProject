import {
    SEARCH_ENGINE_REQUEST,
    SEARCH_ENGINE_SUCCESS,
    SEARCH_ENGINE_ERROR
} from './constants/searchFilteredProductsConstants'

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