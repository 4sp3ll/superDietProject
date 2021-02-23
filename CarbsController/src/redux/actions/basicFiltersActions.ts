import {
    MIN_CARBOHYDRATES,
    MIN_PROTEINS,
    MIN_FATS,
    MIN_SALT,
    MAX_SALT,
    MIN_FIBER,
    MAX_FIBER,
    ADD_NUTRI_REQUEST,
    SUBTRACT_NUTRI_REQUEST,
} from '../constants/basicFiltersConstants'

export const minCarbo = (minCarbo: string) => ({
    type: MIN_CARBOHYDRATES,
    payload: {
        minCarbo
    }
    })
export const minProtein = (minProtein: string) => ({
    type: MIN_PROTEINS,
    payload: {
        minProtein
    }
    })
export const minFat = (minFat: string) => ({
    type: MIN_FATS,
    payload: {
        minFat
    }
    })

export const minSalt = (minSalt: string) => ({
        type: MIN_SALT,
        payload: {
            minSalt
        }
    })

export const maxSalt = (maxSalt: string) => ({
        type: MAX_SALT,
        payload: {
            maxSalt
        }
    })

export const minFiber = (minFiber: string) => ({
        type: MIN_FIBER,
        payload: {
            minFiber
        }
    })

export const maxFiber = (maxFiber: string) => ({
        type: MAX_FIBER,
        payload: {
            maxFiber
        }
    })

export const requestNutrimentLengthAdd = (value: number) => ({
    type: ADD_NUTRI_REQUEST,
    payload: value
})

export const requestNutrimentLengthSubtract = (value: number) => ({
    type: SUBTRACT_NUTRI_REQUEST,
    payload: value
})
