import React, { Component } from 'react';
import { createStore } from 'redux'
import { store } from '../../../index'
import { connect } from 'react-redux'
import { CategoriesView } from './CategoriesView'
import { faLess } from '@fortawesome/free-brands-svg-icons';

const initialState = {
    categories: '',
    chosenCategoryId: '',
    chosenCategoryName: '',
    isLeaf: false,
    pathArray: [],
}

const CATEGORY_ADD = 'CATEGORY_ADD'
const CATEGORY_REMOVE = 'CATEGORY_REMOVE'
const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

const MIN_CARBOHYDRATES = 'MIN_CARBOHYDRATES'
const CHANGE_MAX_PRICE = 'CHANGE_MAX_PRICE'
const CHANGE_MIN_NET = 'CHANGE_MIN_NET'
const CHANGE_MAX_NET = 'CHANGE_MAX_NET'
const CHANGE_MIN_SALES_UNITS = 'CHANGE_MIN_SALES_UNITS'
const CHANGE_MAX_SALES_UNITS = 'CHANGE_MAX_SALES_UNITS'
const CHANGE_MIN_REVENUE = 'CHANGE_MIN_REVENUE'
const CHANGE_MAX_REVENUE = 'CHANGE_MAX_REVENUE'
const CHANGE_MIN_COMMISSION = 'CHANGE_MIN_COMMISSION'
const CHANGE_MAX_COMMISSION = 'CHANGE_MAX_COMMISSION'

const CONTAINS_ADDITIONAL_WORDS = 'CONTAINS_ADDITIONAL_WORDS'
const DOESNT_CONTAINS_ADDITIONAL_WORDS = 'DOESNT_CONTAINS_ADDITIONAL_WORDS'

const SUPERSELLER_DOESNT_MATTER = 'SUPERSELLER_DOESNT_MATTER'
const SUPERSELLER_IT_IS = 'SUPERSELLER_IT_IS'
const SUPERSELLER_IT_IS_NOT = 'SUPERSELLER_IT_IS_NOT'

const GROSS = 'GROSS'
const NET = 'NET'
const REMEMBER_CALC = 'REMEMBER_CALC'

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_ADD:
            return Object.assign({}, state, {
                chosenCategoryId: [...state.chosenCategoryId, action.payload.id],
                chosenCategoryName: [...state.chosenCategoryName, action.payload.name],
                isLeaf: action.payload.leaf
            })
        case CATEGORY_REMOVE:
            return {
                ...state,
                chosenCategoryId: [...state.chosenCategoryId.filter(element => element != action.payload.id)],
                chosenCategoryName: [...state.chosenCategoryName.filter(element => element != action.payload.name)]
            }
        case UPDATE_CATEGORIES:
            return {
                ...state, categories: action.payload.categories
            }
        default:
            return state
    }
}

export const filterReducer = (state = 0, action) => {
    switch (action.type) {
        case MIN_CARBOHYDRATES:
            return {
                ...state,
                minCarbo: action.payload.minCarbo
            }
        case CHANGE_MAX_PRICE:
            return {
                ...state,
                maxPriceValue: action.payload.maxPriceValue
            }
        case CHANGE_MIN_NET:
            return {
                ...state,
                minNetValue: action.payload.minNetValue
            }
        case CHANGE_MAX_NET:
            return {
                ...state,
                maxNetValue: action.payload.maxNetValue
            }
        case CHANGE_MIN_SALES_UNITS:
            return {
                ...state,
                minSalesUnitsValue: action.payload.minSalesUnitsValue
            }
        case CHANGE_MAX_SALES_UNITS:
            return {
                ...state,
                maxSalesUnitsValue: action.payload.maxSalesUnitsValue
            }
        case CHANGE_MIN_REVENUE:
            return {
                ...state,
                minRevenueValue: action.payload.minRevenueValue
            }
        case CHANGE_MAX_REVENUE:
            return {
                ...state,
                maxRevenueValue: action.payload.maxRevenueValue
            }
        case CHANGE_MIN_COMMISSION:
            return {
                ...state,
                minCommissionValue: action.payload.minCommissionValue
            }
        case CHANGE_MAX_COMMISSION:
            return {
                ...state,
                maxCommissionValue: action.payload.maxCommissionValue
            }
        default:
            return state
    }
}

export const keyWords = (state = {}, action) => {
    switch (action.type) {
        case CONTAINS_ADDITIONAL_WORDS:
            return {
                ...state,
                additionalWordsContainer: action.payload.additionalWordsContainer
            }
        case DOESNT_CONTAINS_ADDITIONAL_WORDS:
            return {
                ...state,
                oppositeWordsContainer: action.payload.oppositeWordsContainer
            }
        default:
            return state
    }
}

export const isSuperseller = (state = null, action) => {
    switch (action.type) {
        case SUPERSELLER_DOESNT_MATTER:
            return {
                ...state, superSeller: null
            }
        case SUPERSELLER_IT_IS:
            return {
                ...state, superSeller: true
            }
        case SUPERSELLER_IT_IS_NOT:
            return {
                ...state, superSeller: false
            }
        default:
            return state
    }
}

const initialStateCalc = {
    calc: 'gross'
}

export const netGrossCalc = (state = initialStateCalc, action) => {
    // initial state == error
    switch (action.type) {
        case GROSS:
            return {
             ...state, calc: 'gross'
            }
        case NET:
            return {
            ...state, calc: 'net'
            }
        default:
            return state
    }
}

export const rememberCalc = (state = false, action) => {
    switch (action.type) {
    case REMEMBER_CALC:
        return {
        ...state, calc: true
        }
    default:
        return state
    }
}