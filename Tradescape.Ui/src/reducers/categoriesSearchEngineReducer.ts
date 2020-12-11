
import {
    CHOSEN_CATEGORIES,
    UPDATE_CATEGORIES
} from '../actions/constants/categoriesConstants'

const initialState = {
    categories: {},
    chosenCategories: []
}

interface Action {
    type: string,
    payload: {
            categories: object,
            chosenCategories: []
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
        default:
            return state
    }
}