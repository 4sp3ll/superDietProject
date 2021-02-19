import { useState } from 'react'

export default function useLabelInput( name: string, value: boolean ) {

    const IM_VARIABLE = 'IM_VARIABLE'
    const [ state, setState ] = useState<any>([])
    const [ current, setCurrent ] = useState<boolean>(false)

    if (value !== current && value !== undefined) {
        if (value) {
            setState([`tagtype_${IM_VARIABLE}=labels&tag_contains_${IM_VARIABLE}=contains&tag_${IM_VARIABLE}=${name}`])
            setCurrent(value)
        } else {
            setState([])
            setCurrent(value)
        }
    }

    return state
}
