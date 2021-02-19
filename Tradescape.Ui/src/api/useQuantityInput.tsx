import { useState } from 'react'

export default function useQuantityInput(quantity: string, name: string, value: string) {

    const IM_VARIABLE = 'IM_VARIABLE'
    const [ state, setState ] = useState<any>([])
    const [ current, setCurrent ] = useState<string>('')

    if (quantity === 'min' && current !== value && value !== undefined) {
        setCurrent(value)
        if (value !== '') {
            setState([`nutriment_${IM_VARIABLE}=${name}&nutriment_compare_${IM_VARIABLE}=gte&nutriment_value_${IM_VARIABLE}=${value}`])
        } else {
            setState([])
        }
    }

    else if (quantity === 'max' && current !== value && value !== undefined) {
        setCurrent(value)
        if (value !== '') {
            setState([`nutriment_${IM_VARIABLE}=${name}&nutriment_compare_${IM_VARIABLE}=lte&nutriment_value_${IM_VARIABLE}=${value}`])
        } else {
            setState([])
        }
    }

    return state
}