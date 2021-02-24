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
    requestNutrimentLengthAdd,
    requestNutrimentLengthSubtract
} from './basicFiltersActions'

import {
    containWords,
    shopTag,
    additionalFilterLabelDoesntMatter,
    additionalFilterLabelYes,
} from './additionalFiltersActions'

import {
    searchEngineBegin,
    searchEngineSuccess,
    searchEngineError,
    stringRequest,
    requestTime
} from './searchFilteredProductsActions'

import {
    yourCarbo,
    yourProtein,
    yourFat,
    yourSalt,
    yourKcal
} from './yourProportionsActions'

import { keepProduct } from './journalActions'
import { productsToStore } from './productsToStore'

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
    shopTag,
    chosenCategories,
    searchEngineBegin,
    searchEngineSuccess,
    searchEngineError,
    stringRequest,
    requestTime,
    yourCarbo,
    yourProtein,
    yourFat,
    yourSalt,
    yourKcal,
    additionalFilterLabelDoesntMatter,
    additionalFilterLabelYes,
    keepProduct,
    productsToStore,
    requestNutrimentLengthAdd,
    requestNutrimentLengthSubtract
}

export default allActions