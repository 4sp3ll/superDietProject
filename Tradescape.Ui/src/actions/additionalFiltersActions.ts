import {
    CONTAIN_WORDS,
} from './constants/additionalFiltersConstants'

export const containWords = (containWords: string) => ({
    type: CONTAIN_WORDS,
    payload: {
        containWords
    }
})

export const additionalFilterLabelDoesntMatter = (type: string) => ({
    type: `${type}_DOESNT_MATTER`,
})

export const additionalFilterLabelYes = (type: string) => ({
    type: `${type}_YES`,
})