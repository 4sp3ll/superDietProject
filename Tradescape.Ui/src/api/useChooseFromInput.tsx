import { useState } from 'react'
import  { useDispatch } from 'react-redux'
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

export default function useChooseFromInput(fullName: string, nutri: string) {

    const IM_VARIABLE = 'IM_VARIABLE'
    // const { nutriCounter } = useSelector((state: any) => state)
    const dispatch = useDispatch()

    const [ state, setState ]: any = useState<any>([])
    const [ current, setCurrent ] = useState<string>()

    // BŁĄD KIEDY JEST EVERY, NIE MA STANU POCZĄTKOWEGO! KIEDY JEST EVERY NIC SIĘ NIE

    if (nutri !== 'every') {
        //  0-9 low, 10-15 mid, 16-100 high per 100g
        if (nutri === 'Low' && current !== 'Low' || undefined) {
            setCurrent('Low')
            // JEŻELI TO NIE DZIAŁA TO FUNKCJA MUSI BYĆ ASYNCHRONICZNA, NIE MAM NA RAZIE LEPSZEGO POMYSŁU, ALBO BARDZIEJ IF ELSE POWYŻEJ MUSI BYĆ ASYNCHRONICZNY
            setState([`nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=lte&nutriment_value_${IM_VARIABLE}=9`])
            // dispatch(allActions.requestNutrimentLengthAdd(1))
        }
        else if (nutri === 'Moderate' && current !== 'Moderate' || undefined) {
            setCurrent('Moderate')
            setState([`nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=gte&nutriment_value_${IM_VARIABLE}=10`, `nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=lte&nutriment_value_${IM_VARIABLE}=15`])
        }
        else if (nutri === 'High' && current !== 'High' || undefined ) {
            setCurrent('High')
            setState([`nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=gte&nutriment_value_${IM_VARIABLE}=16`])
            // dispatch(allActions.requestNutrimentLengthAdd(1))
        }
    } else if (nutri === 'every' && current !== 'every') {
        setCurrent('every')
        setState([])
    }
    console.log('state', state)
    return state
}
