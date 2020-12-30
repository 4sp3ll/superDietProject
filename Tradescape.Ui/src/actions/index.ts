import {
    addCategory,
    removeCategory,
    updateCategories,
    chosenCategories
} from './categoriesActions'

import {
    minCarbo,
    minProtein,
    minFat,
    minSalt,
    maxSalt,
    minFiber,
    maxFiber,
} from './basicFiltersActions'

import {
    containWords,
    additionalFilterLabelDoesntMatter,
    additionalFilterLabelYes
} from './additionalFiltersActions'

import {
    searchEngineBegin,
    searchEngineSuccess,
    searchEngineError,
    stringRequest
} from './searchFilteredProductsActions'

import {
    yourCarbo,
    yourProtein,
    yourFat,
    yourSalt,
    yourKcal
} from './yourProportionsActions'

const allActions = {
    addCategory,
    removeCategory,
    updateCategories,
    minCarbo,
    minProtein,
    minFat,
    minSalt,
    maxSalt,
    minFiber,
    maxFiber,
    containWords,
    chosenCategories,
    searchEngineBegin,
    searchEngineSuccess,
    searchEngineError,
    stringRequest,
    yourCarbo,
    yourProtein,
    yourFat,
    yourSalt,
    yourKcal,
    additionalFilterLabelDoesntMatter,
    additionalFilterLabelYes
}

export default allActions