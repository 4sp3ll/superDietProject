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
    containWords
} from './filtersActions'

import {
    searchEngineBegin,
    searchEngineSuccess,
    searchEngineError
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
    yourCarbo,
    yourProtein,
    yourFat,
    yourSalt,
    yourKcal
}

export default allActions