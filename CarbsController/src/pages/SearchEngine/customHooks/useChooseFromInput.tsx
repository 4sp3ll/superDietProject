import { useState } from 'react'

export default function useChooseFromInput(fullName: string, nutri: string) {

    const IM_VARIABLE = 'IM_VARIABLE'
    const [ state, setState ]: any = useState<any>([])
    const [ current, setCurrent ] = useState<string>()

    if (nutri !== 'every') {
        //  0-9 low, 10-15 mid, 16-100 high per 100g
        if (nutri === 'Low' && current !== 'Low') {
            setCurrent('Low')
            setState([`nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=lte&nutriment_value_${IM_VARIABLE}=9`])
        }
        else if (nutri === 'Moderate' && current !== 'Moderate') {
            setCurrent('Moderate')
            setState([`nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=gte&nutriment_value_${IM_VARIABLE}=10`, `nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=lte&nutriment_value_${IM_VARIABLE}=15`])
        }
        else if (nutri === 'High' && current !== 'High') {
            setCurrent('High')
            setState([`nutriment_${IM_VARIABLE}=${fullName}&nutriment_compare_${IM_VARIABLE}=gte&nutriment_value_${IM_VARIABLE}=16`])
        }
    } else if (current !== 'every') {
        setCurrent('every')
        setState([])
    }

    return state
}
