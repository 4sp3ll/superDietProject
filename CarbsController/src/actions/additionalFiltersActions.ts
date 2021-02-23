import {
    CONTAIN_WORDS,
    SHOP_TAG,
} from '../constants/additionalFiltersConstants'

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

export const additionalFilterLabelDoesntMatter = (type: string) => ({
    type: `${type}_DOESNT_MATTER`,
})

export const additionalFilterLabelYes = (type: string) => ({
    type: `${type}_YES`,
})