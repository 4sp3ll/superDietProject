
import {
    CHOSEN_CATEGORIES,
    UPDATE_CATEGORIES
} from '../actions/constants/categoriesConstants'

const initialState = {
    categories: [],
    chosenCategories: []
}

export const categoriesSearchEngineReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case CATEGORY_ADD:
        //     return Object.assign({}, state, {
        //         chosenCategoryId: [...state.chosenCategoryId, action.payload.id],
        //         chosenCategoryName: [...state.chosenCategoryName, action.payload.name],
        //         isLeaf: action.payload.leaf
        //     })
        // case CATEGORY_REMOVE:
        //     return {
        //         ...state,
        //         chosenCategoryId: [...state.chosenCategoryId.filter(element => element != action.payload.id)],
        //         chosenCategoryName: [...state.chosenCategoryName.filter(element => element != action.payload.name)]
        // }
        case UPDATE_CATEGORIES:
            return {
                ...state, categories: action.payload.categories
            }
        case CHOSEN_CATEGORIES:
            console.log(action.payload.chosenCategories);
            return {
                ...state,
                chosenCategories: action.payload.chosenCategories
            }
        default:
            return state
    }
}