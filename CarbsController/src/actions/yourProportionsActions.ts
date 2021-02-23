import {
    YOUR_CARBOHYDRATES,
    YOUR_PROTEINS,
    YOUR_FAT,
    YOUR_SALT,
    YOUR_KCAL
} from '../constants/yourProportionsConstants'

export const yourCarbo = (yourCarbo: string) => ({
    type: YOUR_CARBOHYDRATES,
    payload: {
        yourCarbo
    }
    })
export const yourProtein = (yourProtein: string) => ({
    type: YOUR_PROTEINS,
    payload: {
        yourProtein
    }
    })
export const yourFat = (yourFat: string) => ({
    type: YOUR_FAT,
    payload: {
        yourFat
    }
    })

export const yourSalt = (yourSalt: string) => ({
        type: YOUR_SALT,
        payload: {
            yourSalt
        }
    })

export const yourKcal = (yourKcal: string) => ({
        type: YOUR_KCAL,
        payload: {
            yourKcal
        }
    })