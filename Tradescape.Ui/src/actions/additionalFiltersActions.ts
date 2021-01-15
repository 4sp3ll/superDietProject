import {
    CONTAIN_WORDS,
    SHOP_TAG,
    BUTTON_FLAG_TRUE,
    BUTTON_FLAG_FALSE
} from './constants/additionalFiltersConstants'

export const containWords = (containWords: string) => ({
    type: CONTAIN_WORDS,
    payload: {
        containWords
    }
})

export const shopTag = (shopTag: string) => ({
    type: SHOP_TAG,
    payload: {
        shopTag
    }
})

export const buttonFlagTrue = (buttonFlag: boolean) => ({
    type: BUTTON_FLAG_TRUE,
})

export const buttonFlagFalse = (buttonFlag: boolean) => ({
    type: BUTTON_FLAG_FALSE,
})

export const additionalFilterLabelDoesntMatter = (type: string) => ({
    type: `${type}_DOESNT_MATTER`,
})

export const additionalFilterLabelYes = (type: string) => ({
    type: `${type}_YES`,
})