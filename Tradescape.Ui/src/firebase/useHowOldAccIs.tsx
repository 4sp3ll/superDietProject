import React, { ReactElement, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

interface Props {

}

export default function useHowOldAccIs() {

    const [state, setState] = useState<number>()
    const accCreatedAtUnix = useSelector((state: any) => state.firebase.auth.createdAt)
    // const accCreatedAtUnix = accCreatedAtWithAdditional.slice(0, -3)
    const today = Date.now()
    const calc = Math.floor((today - parseInt(accCreatedAtUnix))/86400000)
    // Math.floor(
        ///86400
    const howManyDays = calc < 1 ? 1 : calc

    useEffect(() => {
        setState(howManyDays)
    }, [])


    return state
}
