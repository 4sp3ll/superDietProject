import React, { useState, useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import allActions from '../actions/index'
import useChooseFromInput from '../pages/SearchEngine/customHooks/useChooseFromInput'
import useQuantityInput from '../pages/SearchEngine/customHooks/useQuantityInput'
import useWordsInput from '../pages/SearchEngine/customHooks/useWordsInput'
import useLabelInput from '../pages/SearchEngine/customHooks/useLabelInput'
import useCategoriesInput from '../pages/SearchEngine/customHooks/useCategoriesInput'
import { RESET_NUTRI } from '../constants/basicFiltersConstants'
import { RESET_CATEGORIES } from '../constants/categoriesConstants'

interface FiltersStatus {
    state: object,
    filtersSearchEngine: {
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

    const [nutriFilters, setNutriFilters]: any = useState<string[]>()
    const [tagFilters, setTagFilters]: any = useState<string[]>()

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
    const chosenCategories = useSelector((state: CategoriesStatus) => state.categoriesSearchEngine.chosenCategories)
    const isLoading = useSelector((state: LoadingStatus) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()

    const carbsString = useChooseFromInput('carbohydrates', minCarbs)
    const proteinsString = useChooseFromInput('proteins', minProtein)
    const fatString = useChooseFromInput('fat', minFat)

    const minimumSalt = useQuantityInput('min', 'salt', minSalt)
    const maximumSalt = useQuantityInput('max', 'salt', maxSalt)
    const minimumFiber = useQuantityInput('min', 'fiber', minFiber)
    const maximumFiber = useQuantityInput('max', 'fiber', maxFiber)

    const shopTagKeyword = useWordsInput('stores_tags', shopTag)
    const containWordsKeyword = useWordsInput('_keywords', containWords)

    const organicString = useLabelInput('organic', organic)
    const vegetarianString = useLabelInput('vegetarian', vegetarian)
    const noSugarString = useLabelInput('no-added-sugar', noAddedSugar)
    const noPreservativesString = useLabelInput('no-preservatives', noPreservatives)
    const noArtificialColorsString = useLabelInput('no-artificial-colors', noArtificialColors)
    const noArtificialFlavorsString = useLabelInput('no-artificial-flavors', noArtificialFlavors)

    const chosenCategoriesString = useCategoriesInput(chosenCategories)

    useEffect(() => {
        setNutriFilters([
            ...carbsString,
            ...proteinsString,
            ...fatString,
            ...minimumSalt,
            ...maximumSalt,
            ...minimumFiber,
            ...maximumFiber,
        ])
    }, [
        carbsString,
        proteinsString,
        fatString,
        minimumSalt,
        maximumSalt,
        minimumFiber,
        maximumFiber,
    ])

    useEffect(() => {
        setTagFilters([
            ...shopTagKeyword,
            ...containWordsKeyword,
            ...organicString,
            ...vegetarianString,
            ...noSugarString,
            ...noPreservativesString,
            ...noArtificialColorsString,
            ...noArtificialFlavorsString,
            ...chosenCategoriesString
        ])
    }, [
        shopTagKeyword,
        containWordsKeyword,
        organicString,
        vegetarianString,
        noSugarString,
        noPreservativesString,
        noArtificialColorsString,
        noArtificialFlavorsString,
        chosenCategoriesString
    ])

    const nutriFiltersCorrected = nutriFilters && nutriFilters.map((e: any, index: any) => {
        return e.replaceAll('IM_VARIABLE', index)
    })
    const tagFiltersCorrected = tagFilters && tagFilters.map((e: any, index: any) => {
        return e.replaceAll('IM_VARIABLE', index)
    })

    useEffect(() => {
        return () => {
            dispatch({type: RESET_NUTRI});
            dispatch({type: RESET_CATEGORIES});
        }
    }, [])

    // PROBLEM Z KATEGORIAMI NIE LEŻY W REDUXIE TYLKO TUTAJ
    // both arrays should have different elements numbering
    const userRequestString = nutriFiltersCorrected && tagFiltersCorrected && [...nutriFiltersCorrected, ...tagFiltersCorrected].join('&')

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