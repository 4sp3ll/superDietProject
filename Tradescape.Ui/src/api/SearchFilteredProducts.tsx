import React, { useState, useEffect } from 'react'
import {Button, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import allActions from '../actions/index'
import useChooseFromInput from './useChooseFromInput'

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

    /// THE BIG ISSUE HERE IS THAT YOU ARE NOT USE STATE HERE, INSTEAD ARRAYS
    /// YOU SHOULD PUT THIS ARRAYS TO STATE, AND THAT WILL BE FINE SOLUTION

    // const [userRequestNutritment, setUserRequestNutritment]: any = useState<any>([])
    const userRequestNutritment: Array<string> = []
    // const userRequestTagType: Array<string> = []
    const userRequestTagType: Array<string> = []

    //#1
        //a
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

    const carbs = carbsString ? carbsString : []
    const proteins = proteinsString ? proteinsString : []
    const fat = fatString ? fatString : []


        //b
    const chosenCategories = useSelector((state: CategoriesStatus) => state.categoriesSearchEngine.chosenCategories)
        //c
    const isLoading = useSelector((state: LoadingStatus) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()



    const requestConditions: Array<object> = [
        // {
        //     value: minCarbo,
        //     fullName: 'carbohydrates'
        // },
        // {
        //     value: minProtein,
        //     fullName: 'proteins',
        // },
        // {
        //     value: minFat,
        //     fullName: 'fat',
        // },
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

    // forEach function to deal with it

    // STAN KAŻDEGO TEPO POLA MUSI BYĆ OSOBNY, DOPIERO NA KOŃCU POWINNY BYĆ ZBIERANE I WYSYŁANE ZAPYTANIE
    // PROBLEM W JAKIS POSÓB W TAKIEJ KONFIGURACJI MIERZYĆ userTRequestNutritment.length?

    requestConditions.filter((e: any) => e[Object.keys(e)[0]] !== 'every').forEach((e: any) => {
                // fat, protein, carbo
                // //  0-9 low, 10-15 mid, 16-100 high per 100g
                // if (e.value === 'Low') {
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=9`)
                //     // setUserRequestNutritment([...userRequestNutritment ,`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=9`])

                // } else if (e.value === 'Moderate') {
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=10`)
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=lte&nutriment_value_${userRequestNutritment.length}=15`)

                // } else if (e.value === 'High') {
                //     userRequestNutritment.push(`nutriment_${userRequestNutritment.length}=${e.fullName}&nutriment_compare_${userRequestNutritment.length}=gte&nutriment_value_${userRequestNutritment.length}=16`)
                // }
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

    // wyjaśnienie: komponent się ładuje, useEffect działa, ale zmienna userRequuestString w momencie załadowania komponentu jest pusta
    // taka wartość też się wkleja, jeżeli natomiast useEffect będzie uzależniony od zmiennej stanu requestState, nigdy się nie zmieni
    // ponieważ wywołuje zmiany sama w sobie poprzez setState

    // change table to string used in axios request

    // const userRequestString = [...userRequestNutritment, ...userRequestTagType].join('&')

    const [requestState, setRequestState]: any = useState<string>()

    // useEffect(() => {
    //     setRequestState(userRequestString)
    //     console.log('I used useEffect on main view')
    //     console.log(userRequestNutritment)
    // }, [userRequestString])

    // const options = {
    //     headers: {'User-Agent': 'LowCarbsApp - Windows - Version 0.1'}
    // }

    // W momencie kiedy klikamy search, wywołuje się funkcja która:
    // 0. najpierw musimy zamienić stringi w tablicę, zwróć uwagę, że one są już w tablicy i tak musi zostać na tym etapie, dlatego, że musi wyekstrakować
    // 2 osobne elementy z tablicy mid i wprowadzić je do nowej tablicy const newArray => [...oldArray]
    // 1. zamienia IM_variable na numery indexów
    // 2. Łączy wszystkie elementy tablicy w całość i przekazuje do zmiennej "element" func() request

    const filtersArray = [...carbs, ...proteins, ...fat]
    console.log('newArray', filtersArray)

    const filtersArrayCorrected = filtersArray.map((e: any, index: any) => {
        return e.replaceAll('IM_VARIABLE', index)
    })

    console.log('filtersArrayCorrected', filtersArrayCorrected)
    const userRequestString = [...filtersArrayCorrected].join('&')

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