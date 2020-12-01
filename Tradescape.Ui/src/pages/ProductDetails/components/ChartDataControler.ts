import {useState} from 'react'

export const ChartDataControler: any = (allegroValue: number, restValue: number) => {

    const initialState = {
        rest:  {
            id: "reszta",
            label: "reszta",
            value: 80,
            color: "hsl(103, 70%, 50%)"
        },
        commission: {
            id: "prowizja",
            label: "prowizja",
            value: 20,
            color: "hsl(48, 70%, 50%)"
        }
    }

    const [state, setState] = useState(initialState)

    const tabel = []
    tabel.push(state.rest, state.commission)

    return (
        tabel

    )
}