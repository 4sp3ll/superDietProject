import {
    YOUR_CARBOHYDRATES,
    YOUR_PROTEINS,
    YOUR_FAT,
    YOUR_SALT,
    YOUR_KCAL
} from '../actions/constants/yourProportionsConstants'

interface Action {
    type: string,
    payload: {
        yourCarbo: string,
        yourProtein: string,
        yourFat: string,
        yourSalt: string,
        yourKcal: string
    }
}

const initialState = {
    yourCarbo: null,
    yourProtein: null,
    yourFat: null,
    yourSalt: null,
    yourKcal: null
}

export const yourProportions = (state = initialState, action: Action) => {
    switch (action.type) {
        case YOUR_CARBOHYDRATES:
            return {
                ...state,
                yourCarbo: action.payload.yourCarbo
            }
        case YOUR_PROTEINS:
            return {
                ...state,
                yourProtein: action.payload.yourProtein
            }
        case YOUR_FAT:
            return {
                ...state,
                yourFat: action.payload.yourFat
            }
        case YOUR_SALT:
            return {
                ...state,
                yourSalt: action.payload.yourSalt
            }
        case YOUR_KCAL:
            return {
                ...state,
                yourKcal: action.payload.yourKcal
            }
        default:
            return state
    }
}