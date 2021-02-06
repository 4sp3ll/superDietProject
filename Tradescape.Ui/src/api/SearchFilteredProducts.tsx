import React, { useState, useRef, useEffect } from 'react'
import {Button, Spinner} from 'react-bootstrap'
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

interface LoadingStatus {
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

    /// THE BIG ISSUE HERE IS THAT YOU ARE NOT USE STATE HERE, INSTEAD ARRAYS
    /// YOU SHOULD PUT THIS ARRAYS TO STATE, AND THAT WILL BE FINE SOLUTION

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
                // // shopTag
                if (e.fullName === 'shopTag' && e.value !== undefined && e.value !== '') {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=stores_tags&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.value}`)
                }
                // containWord
                if (e.fullName === 'containWords' && e.value !== undefined && e.value !== '') {
                    userRequestTagType.push(`tagtype_${userRequestTagType.length}=_keywords&tag_contains_${userRequestTagType.length}=contains&tag_${userRequestTagType.length}=${e.value}`)
                }
    })

    // change table to string used in axios request
    const userRequestString = [...userRequestNutritment, ...userRequestTagType].join('&')
    console.log(userRequestString)

    const [requestState, setRequestState]: any = useState<string>()

    useEffect(() => {
        setRequestState(userRequestString)
        console.log('I used useEffect on main view')
        console.log(userRequestNutritment)
    }, [])

    // const options = {
    //     headers: {'User-Agent': 'LowCarbsApp - Windows - Version 0.1'}
    // }

    const request = (e: string) => {
        const timeStart = Date.now()
        dispatch(allActions.searchEngineBegin())
        axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&page=1&${e}`)
            .then((response: any) => dispatch(allActions.searchEngineSuccess(response)))
            .then(() => dispatch(allActions.stringRequest(e)))
            .catch((error: string) => dispatch(allActions.searchEngineError(error)))
            .finally(() => {dispatch(allActions.requestTime(Date.now() - timeStart))})
        }


    return (
        <div>

        {/* <style type="text/css">
            {`
            .btn-orange {
            background-color: #F87320;
            color: white;
            }

            .btn-orange:focus,
            .btn-orange.focus {
            box-shadow: none;
            }

            .btn-orange:hover {
                color: white;
                background-color: #f76205;
                border-color: #f5d4bf
            }

            .btn-orange.disabled,
            .btn-orange:disabled {
                color: white;
                background-color: #eb9d6c;
                border-color: #f5d4bf
            }
            .btn-lg {
            padding: .7rem 2rem;
            font-size: 1.1rem;
            }

            `}
        </style> */}
        {
            isLoading ?

            <Button
            style={{padding: '.7rem 1rem'}}
            variant='orange'
            size='lg'
            disabled

            >
                <Spinner
                animation="grow"
                size="sm"
                style={{padding: '.7rem'}}
                />
                {' '}Loading...
            </Button>
            :
            <Button
                variant='orange'
                size='lg'
                onClick={() => {
                    request(requestState)
                    }
                }
            >
                Search
            </Button>
            }
    </div>
    )
}



export default SearchFilteredProducts