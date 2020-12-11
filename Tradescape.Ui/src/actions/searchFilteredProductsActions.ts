import {
    SEARCH_ENGINE_REQUEST,
    SEARCH_ENGINE_SUCCESS,
    SEARCH_ENGINE_ERROR
} from './constants/searchFilteredProductsConstants'

export const fetchFiltersBegin = () => {
    return {
        type: SEARCH_ENGINE_REQUEST,
    }
}

export const fetchFiltersSuccess = (currentState: object) => {
    return {
        type: SEARCH_ENGINE_SUCCESS,
        payload: currentState
    }
}

export const fetchFiltersError = (error: string) => {
    return {
        type: SEARCH_ENGINE_ERROR,
        payload: error
    }
}