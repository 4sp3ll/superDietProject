import React, { useState, useRef, useEffect } from 'react'
import {Button, Spinner} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import allActions from '../actions/index'
import { containWords } from '../actions/additionalFiltersActions'

interface FiltersStatus {
    state: object,
    filtersSearchEngine: {
        minCarbo: string,
        minProtein: string,
        minFat: string,
        minSalt: string,
        maxSalt: string,
        minFiber: string,
        maxFiber: string,
        noPreservatives: boolean,
        organic: boolean,
        noAddedSugar: boolean,
        noArtificialColors: boolean,
        noArtificialFlavors: boolean,
        vegetarian: boolean,
        containWords: string,
        shopTag: string
    }
}

type LoadingStatus = {
    state: object,
    apiSearchEngineReducer: {
    loading: boolean
    }
}

interface CategoriesStatus {
    state: object,
    categoriesSearchEngine: {
    chosenCategories: string[]
    }
}

const SearchFilteredProducts = () => {

    // const userRequestTable: Array<string> = []
    const userRequestNutritment: Array<string> = []
    const userRequestTagType: Array<string> = []


    const {
        minCarbo,
        minProtein,
        minFat,
        minSalt,
        maxSalt,
        minFiber,
        maxFiber,
        noPreservatives,
        organic,
        noAddedSugar,
        noArtificialColors,
        noArtificialFlavors,
        vegetarian,
        containWords,
        shopTag
    } = useSelector((state: FiltersStatus) => state.filtersSearchEngine)
    const chosenCategories = useSelector((state: CategoriesStatus) => state.categoriesSearchEngine.chosenCategories)
    const isLoading = useSelector((state: LoadingStatus) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()

    const requestConditions: Array<object> = [
        {
            value: minCarbo,
            fullName: 'carbohydrates'
        },
        {
            value: minProtein,
            fullName: 'proteins',
        },
        {
            value: minFat,
            fullName: 'fat', // fat / fats
        },
        {
            value: minSalt,
            fullName: 'salt',
            type: 'minSalt',
        },
        {
            value: maxSalt,
            fullName: 'salt',
            type: 'maxSalt',
        },
        {
            value: minFiber,
            fullName: 'fiber',
            type: 'minFiber',
        },
        {
            value: maxFiber,
            fullName: 'fiber',
            type: 'maxFiber',
        },
        {
            value: noPreservatives,
            fullName: 'no-preservatives'
        },
        {
            value: organic,
            fullName: 'organic'
        },
        {
            value: noAddedSugar,
            fullName: 'no-added-sugar'
        },
        {
            value: noArtificialColors,
            fullName: 'no-artificial-colors'
        },
        {
            value: noArtificialFlavors,
            fullName: 'no-artificial-flavors'
        },
        {
            value: vegetarian,
            fullName: 'vegetarian'
        },
        {
            value: chosenCategories,
            fullName: 'categories'
        },
        {
            value: containWords,
            fullName: 'containWords'
        },
        {
            value: shopTag,
            fullName: 'shopTag'
        }
    ]

    requestConditions.filter((e: any) => e[Object.keys(e)[0]] !== 'every').forEach((e: any) => {
                // fat, protein, carbo
                //  0-9 low, 10-15 mid, 16-100 high per 100g
                if (e.value === 'Low') {
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=9`)

                } else if (e.value === 'Moderate') {
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=10`)
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=15`)

                } else if (e.value === 'High') {
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=16`)
                }
                // salt
                if (e.type === 'minSalt' && e.value !== undefined && e.value !== '') {
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=salt&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                }

                if (e.type === 'maxSalt' && e.value !== undefined && e.value !== '') {
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=salt&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                }
                // fiber
                if (e.type === 'minFiber' && e.value !== undefined && e.value !== '') {
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=fiber&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                }

                if (e.type === 'maxFiber' && e.value !== undefined && e.value !== '') {
                    userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=fiber&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                }
                // no-preservatives
                if (e.fullName === 'no-preservatives' && e.value !== undefined && e.value !== false) {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=labels&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.fullName}`)
                }
                // organic
                if (e.fullName === 'organic' && e.value !== undefined && e.value !== false) {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=labels&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.fullName}`)
                }
                // no-added-sugar
                if (e.fullName === 'no-added-sugar' && e.value !== undefined && e.value !== false) {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=labels&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.fullName}`)
                }
                // no-artificial-colors
                if (e.fullName === 'no-artificial-colors' && e.value !== undefined && e.value !== false) {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=labels&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.fullName}`)
                }
                // no-artificial-flavors
                if (e.fullName === 'no-artificial-flavors' && e.value !== undefined && e.value !== false) {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=labels&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.fullName}`)
                }
                // vegetarian
                if (e.fullName === 'vegetarian' && e.value !== undefined && e.value !== false) {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=labels&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.fullName}`)
                }
                // categories
                if (e.fullName === 'categories' && e.value !== undefined && !e.value.includes("everywhere")) {
                    e.value.map((element: string) => {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=categories&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${element}`)
                    })
                }
                // containWords
                if (e.fullName === 'containWords' && e.value !== undefined) {

                }
    })

    // change table to string used in axios request
    const userRequestString = [...userRequestNutritment, ...userRequestTagType].join('&')

    const options = {
        headers: {'User-Agent': 'LowCarbsApp - Windows - Version 0.1'}
    }

    const request = (e: string) => {
        dispatch(allActions.searchEngineBegin())
        axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&page=1&${e}`, options)
            .then((response: any) => dispatch(allActions.searchEngineSuccess(response)))
            .then(() => dispatch(allActions.stringRequest(e)))
            .catch((error: string) => dispatch(allActions.searchEngineError(error)))
        }

    return (
    <div>
        {
            isLoading ?

            <Button
            color="success"
            style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320" }}
            disabled

            >
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                &nbsp;Loading...
            </Button>
            :
            <Button
                color="success"
                style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320" }}
                onClick={() => request(userRequestString)}

            >
                Search
            </Button>
            }
    </div>
    )
}



export default SearchFilteredProducts