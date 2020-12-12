import {
    MIN_CARBOHYDRATES,
    MIN_PROTEINS,
    MIN_FATS,
    MIN_SALT,
    MAX_SALT,
    MIN_ROUGHAGE,
    MAX_ROUGHAGE,
    CONTAIN_WORDS
} from './constants/filtersConstants'

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

export const minRoughage = (minRoughage: string) => ({
        type: MIN_ROUGHAGE,
        payload: {
            minRoughage
        }
    })

export const maxRoughage = (maxRoughage: string) => ({
        type: MAX_ROUGHAGE,
        payload: {
            maxRoughage
        }
    })

export const containWords = (containWords: string) => ({
        type: CONTAIN_WORDS,
        payload: {
            containWords
        }
    })