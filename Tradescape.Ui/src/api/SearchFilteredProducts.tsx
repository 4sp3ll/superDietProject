import React, { useState, useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import allActions from '../actions/index'
import useChooseFromInput from './useChooseFromInput'
import useQuantityInput from './useQuantityInput'
import { RESET_NUTRI } from '../actions/constants/basicFiltersConstants'
import { RESET_CATEGORIES } from '../actions/constants/categoriesConstants'

interface FiltersStatus {
    state: object,
    filtersSearchEngine: {
        minCarbo: string, // TO DELETE
        minCarbs: string,
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

    const userRequestNutritment: Array<string> = []
    const userRequestTagType: Array<string> = []

    const {
        minCarbs,
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

    const carbsString = useChooseFromInput('carbohydrates', minCarbs)
    const proteinsString = useChooseFromInput('proteins', minProtein)
    const fatString = useChooseFromInput('fat', minFat)

    const minimumSalt = useQuantityInput('min', 'salt', minSalt)
    const maximumSalt = useQuantityInput('max', 'salt', maxSalt)
    const minimumFiber = useQuantityInput('min', 'fiber', minFiber)
    const maximumFiber = useQuantityInput('max', 'fiber', maxFiber)

    // TUTAJ JEST PRZYCZYNA, USEEFFECT PORÓWNUJE OCZYWIŚCIE REFERENCEJ DO TABLIC KTÓRA CAŁY CZAS SIĘ ZMIENIA
    // const carbs = carbsString ? carbsString : ''
    // const proteins = proteinsString ? proteinsString : ''
    // const fat = fatString ? fatString : ''
    // const minSaltString = minimumSalt ? minimumSalt : ''
    // const maxSaltString = maximumSalt ? maximumSalt : ''
    // const minimumFiberString = minimumFiber ? minimumFiber: ''
    // const maximumFiberString = maximumFiber ? maximumFiber: ''

    const chosenCategories = useSelector((state: CategoriesStatus) => state.categoriesSearchEngine.chosenCategories)
    const isLoading = useSelector((state: LoadingStatus) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()

    const [filtersArray, setFiltersArray]: any = useState<string[]>()

    useEffect(() => {
        setFiltersArray([...carbsString, ...proteinsString, ...fatString, ...minimumSalt, ...maximumSalt, ...minimumFiber, ...maximumFiber])
    }, [carbsString, proteinsString, fatString, minimumSalt, maximumSalt, minimumFiber, maximumFiber])

    // TUTAJ SIĘ COŚ ZJEB***** PRAWDPODOBNIE PRZEZ ZMIANY W REDUCERACH
    useEffect(() => {
        return () => {
            dispatch({type: RESET_NUTRI});
            dispatch({type: RESET_CATEGORIES});
        }
    }, [])

    const filtersArrayCorrected = filtersArray && filtersArray.map((e: any, index: any) => {
        return e.replaceAll('IM_VARIABLE', index)
    })

    const requestConditions: Array<object> = [
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

                //   // salt
                //   if (e.type === 'minSalt' && e.value !== undefined && e.value !== '') {
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=salt&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                // }

                // if (e.type === 'maxSalt' && e.value !== undefined && e.value !== '') {
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=salt&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                // }
                // fiber
                // if (e.type === 'minFiber' && e.value !== undefined && e.value !== '') {
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=fiber&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                // }

                // if (e.type === 'maxFiber' && e.value !== undefined && e.value !== '') {
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=fiber&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=${e.value}`)
                // }
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






    console.log('filtersArrayCorrected', filtersArrayCorrected)
    const userRequestString = filtersArrayCorrected && [...filtersArrayCorrected].join('&')
    console.log('RESULTATTTTTTTTTTTTTTTTT', userRequestString)


    // const options = {
    //     headers: {'User-Agent': 'LowCarbsApp - Windows - Version 0.1'}
    // }

    const request = (element: string) => {
        const timeStart = Date.now()
        dispatch(allActions.searchEngineBegin())
        axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&page=1&${element}`)
            .then((response: any) => dispatch(allActions.searchEngineSuccess(response)))
            .then(() => dispatch(allActions.stringRequest(element)))
            .catch((error: string) => dispatch(allActions.searchEngineError(error)))
            .finally(() => {dispatch(allActions.requestTime(Date.now() - timeStart))})
        }



    return (
        <div>
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
                className='main-search-button'
                onClick={() => {
                    request(userRequestString)
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