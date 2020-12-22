import {
    MIN_CARBOHYDRATES,
    MIN_PROTEINS,
    MIN_FATS,
    MIN_SALT,
    MAX_SALT,
    MIN_FIBER,
    MAX_FIBER,
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
        minFiber: string,
        maxFiber: string,
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
        case MIN_FIBER:
            return {
                ...state,
                minFiber: action.payload.minFiber
            }
        case MAX_FIBER:
            return {
                ...state,
                maxFiber: action.payload.maxFiber
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