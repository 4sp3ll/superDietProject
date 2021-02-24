
import {
    CHOSEN_CATEGORIES,
    UPDATE_CATEGORIES,
    RESET_CATEGORIES
} from '../constants/categoriesConstants'

const initialState = {
    categories: {},
    chosenCategories: ["everywhere"]
}

interface Action {
    type: string,
    payload: {
            categories: object,
            chosenCategories: any[]
        }
    }

export const categoriesSearchEngineReducer = (state: object = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return {
                ...state, categories: action.payload.categories
            }
        case CHOSEN_CATEGORIES:
            return {
                ...state,
                chosenCategories: Array.from(action.payload.chosenCategories)
            }
        case RESET_CATEGORIES:
            return {
                ...state,
                chosenCategories: ["everywhere"]
            }
        default:
            return state
    }
}