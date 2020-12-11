import {
    MIN_CARBOHYDRATES,
    MIN_PROTEINS,
    MIN_FATS,
    MIN_SALT,
    MAX_SALT,
    MIN_ROUGHAGE,
    MAX_ROUGHAGE,
    CONTAIN_WORDS
} from '../actions/constants/filtersConstants'

interface Action {
    type: string,
    payload: {
        minCarbo: string,
        minProtein: string,
        minFat: string,
        minSalt: string,
        maxSalt: string,
        minRoughage: string,
        maxRoughage: string,
        containWords: string
    }
}

export const filtersSearchEngineReducer = (state = {}, action: Action) => {
    switch (action.type) {
        case MIN_CARBOHYDRATES:
            return {
                ...state,
                minCarbo: action.payload.minCarbo
            }
        case MIN_PROTEINS:
            return {
                ...state,
                minProtein: action.payload.minProtein
            }
        case MIN_FATS:
            return {
                ...state,
                minFat: action.payload.minFat
            }
        case MIN_SALT:
            return {
                ...state,
                minSalt: action.payload.minSalt
            }
        case MAX_SALT:
            return {
                ...state,
                maxSalt: action.payload.maxSalt
            }
        case MIN_ROUGHAGE:
            return {
                ...state,
                minRoughage: action.payload.minRoughage
            }
        case MAX_ROUGHAGE:
            return {
                ...state,
                maxRoughage: action.payload.maxRoughage
            }
        case CONTAIN_WORDS:
            return {
                ...state,
                containWords: action.payload.containWords
            }
        default:
            return state
    }
}