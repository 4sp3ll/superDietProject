import { useState } from 'react'
import  { useSelector, useDispatch } from 'react-redux'
import allActions from '../actions'

interface Props {
    // nutritionalValue: string,
    fullName: string,
    // reduxName: string
}

interface FiltersStatus {
    filtersSearchEngine: {
        minCarbs: string
    }
}
// nutritionalValue, reduxName,
export default function useChooseFromInput(fullName: string) {
    // minCarbo może być przekazane w propsach i możesz zrobić z tego funkcję uniwersalną dla 3 pól: to samo minProteins, minFat
    // if (reduxName === 'minCarbs') {
    const { minCarbs } = useSelector((state: FiltersStatus) => state.filtersSearchEngine)
    const { nutriCounter } = useSelector((state: any) => state)
    const dispatch = useDispatch()

    const [ state, setState ] = useState<string>()
    const [ current, setCurrent ] = useState<string>()
console.log(nutriCounter)
console.log(minCarbs)
console.log(typeof minCarbs)
    if (minCarbs !== 'every') {
        //  0-9 low, 10-15 mid, 16-100 high per 100g
        if (minCarbs === 'Low' && current !== 'Low' || undefined) {

            if (current === 'Moderate') {
                dispatch(allActions.requestNutrimentLengthSubtract(2))
            }
            else if (current === 'High') {
                dispatch(allActions.requestNutrimentLengthSubtract(1))
            }

            setCurrent('Low')
            // na tym etapie nie powinno być jeszcze połączenia, dopiero po zebraniu wszystkich danych ze wszystkich stanów
            setState(`nutriment_${nutriCounter}=${fullName}&nutriment_compare_${nutriCounter}=lte&nutriment_value_${nutriCounter}=9`)
            dispatch(allActions.requestNutrimentLengthAdd(1))
console.log('poszło')

        }
        else if (minCarbs === 'Moderate' && current !== 'Moderate' || undefined) {

            if (current === 'Low' || current === 'High') {
                dispatch(allActions.requestNutrimentLengthSubtract(1))
            }
            // else if (current === 'High') {
            //     dispatch(allActions.requestNutrimentLengthSubtract(1))
            // }

            setCurrent('Moderate')
            setState(`nutriment_${nutriCounter}=${fullName}&nutriment_compare_${nutriCounter}=gte&nutriment_value_${nutriCounter}=10&nutriment_${nutriCounter+1}=${fullName}&nutriment_compare_${nutriCounter+1}=lte&nutriment_value_${nutriCounter+1}=15`)
            dispatch(allActions.requestNutrimentLengthAdd(2))
            // dispatch(allActions.requestNutrimentLengthAdd())
console.log('poszło')
console.log(current)
        }
        else if (minCarbs === 'High' && current !== 'High' || undefined ) {

            if (current === 'Moderate') {
                dispatch(allActions.requestNutrimentLengthSubtract(2))
            }
            else if (current === 'Low') {
                dispatch(allActions.requestNutrimentLengthSubtract(1))
            }


            setCurrent('High')
            setState(`nutriment_${nutriCounter}=${fullName}&nutriment_compare_${nutriCounter}=gte&nutriment_value_${nutriCounter}=16`)
            dispatch(allActions.requestNutrimentLengthAdd(1))
console.log('poszło')
        }
    }

console.log(state)
    return state
}
