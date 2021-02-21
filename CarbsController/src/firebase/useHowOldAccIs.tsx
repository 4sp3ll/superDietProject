import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function useHowOldAccIs() {

    const [state, setState] = useState<number>()
    const accCreatedAtUnix = useSelector((state: any) => state.firebase.auth.createdAt)
    const today = Date.now()
    const calc = Math.floor((today - parseInt(accCreatedAtUnix))/86400000)
    const howManyDays = calc < 1 ? 1 : calc

    useEffect(() => {
        setState(howManyDays)
    }, [howManyDays])

    return state
}
