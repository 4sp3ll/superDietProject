import { useState } from 'react'

export default function useCategoriesInput(value: string[]) {

    const IM_VARIABLE = 'IM_VARIABLE'
    const [ state, setState ] = useState<any>([])
    const [ current, setCurrent ] = useState<string[]>([''])

    if (value !== current && value !== undefined) {
        if (!value.includes('everywhere')) {

            value.map((element) => {
                setState([...state, `tagtype_${IM_VARIABLE}=categories&tag_contains_${IM_VARIABLE}=contains&tag_${IM_VARIABLE}=${element}`])
                setCurrent(value)
            })
        } else if (value.includes('everywhere')) {
            setState([])
            setCurrent(value)
        }
    }

    return state

}
