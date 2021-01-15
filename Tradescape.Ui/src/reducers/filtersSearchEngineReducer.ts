import {
    MIN_CARBOHYDRATES,
    MIN_PROTEINS,
    MIN_FATS,
    MIN_SALT,
    MAX_SALT,
    MIN_FIBER,
    MAX_FIBER,
} from '../actions/constants/basicFiltersConstants'

import {
    CONTAIN_WORDS,
    SHOP_TAG,
    PRESERVATIVES_DOESNT_MATTER,
    PRESERVATIVES_YES,
    ORGANIC_DOESNT_MATTER,
    ORGANIC_YES,
    SUGAR_DOESNT_MATTER,
    SUGAR_YES,
    COLORS_DOESNT_MATTER,
    COLORS_YES,
    FLAVORS_DOESNT_MATTER,
    FLAVORS_YES,
    VEGETARIAN_DOESNT_MATTER,
    VEGETARIAN_YES,
    BUTTON_FLAG_TRUE,
    BUTTON_FLAG_FALSE
} from '../actions/constants/additionalFiltersConstants'

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
        containWords: string,
        shopTag: string
    }
}

const intialState = {
    noPreservatives: false,
    organic: false,
    noAddedSugar: false,
    noArtificialColors: false,
    noArtificialFlavors: false,
    vegetarian: false,
    flag: false
}

export const filtersSearchEngineReducer = (state = intialState, action: Action) => {
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
        case SHOP_TAG:
            return {
                ...state,
                shopTag: action.payload.shopTag
            }
        case PRESERVATIVES_DOESNT_MATTER:
            return {
                ...state,
                noPreservatives: false
            }
        case PRESERVATIVES_YES:
            return {
                ...state,
                noPreservatives: true
            }
        case ORGANIC_DOESNT_MATTER:
            return {
                ...state,
                organic: false
            }
        case ORGANIC_YES:
            return {
                ...state,
                organic: true
            }
        case SUGAR_DOESNT_MATTER:
            return {
                ...state,
                noAddedSugar: false
            }
        case SUGAR_YES:
            return {
                ...state,
                noAddedSugar: true
            }
        case COLORS_DOESNT_MATTER:
            return {
                ...state,
                noArtificialColors: false
            }
        case COLORS_YES:
            return {
                ...state,
                noArtificialColors: true
            }
        case FLAVORS_DOESNT_MATTER:
            return {
                ...state,
                noArtificialFlavors: false
            }
        case FLAVORS_YES:
            return {
                ...state,
                noArtificialFlavors: true
            }
        case VEGETARIAN_DOESNT_MATTER:
            return {
                ...state,
                vegetarian: false
            }
        case VEGETARIAN_YES:
            return {
                ...state,
                vegetarian: true
            }
        case BUTTON_FLAG_TRUE:
            return {
                ...state,
                flag: true
            }
        case BUTTON_FLAG_FALSE:
            return {
                ...state,
                flag: false
            }
        default:
            return state
    }
}