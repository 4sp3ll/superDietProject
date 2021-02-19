import { useState } from 'react'

export default function useWordsInput( name: string, value: string ) {

    const IM_VARIABLE = 'IM_VARIABLE'
    const [ state, setState ] = useState<any>([])
    const [ current, setCurrent ] = useState<string>('')

    if (current !== value && value !== undefined) {
        setCurrent(value)
        if (value !== '') {
            setState([`tagtype_${IM_VARIABLE}=${name}&tag_contains_${IM_VARIABLE}=contains&tag_${IM_VARIABLE}=${value}`])
        } else (
            setState('')
        )
    }

    return state
}
