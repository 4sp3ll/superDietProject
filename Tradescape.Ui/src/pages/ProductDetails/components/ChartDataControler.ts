import {useState} from 'react'

export const ChartDataControler: any = () => {

    const initialState = {
        fats:  {
            id: "fats",
            label: "fat",
            value: 80,
            color: "hsl(103, 70%, 50%)"
        },
        proteins: {
            id: "proteins",
            label: "proteins",
            value: 20,
            color: "hsl(48, 70%, 50%)"
        },
        carbs: {
            id: "carbs",
            label: "carbs",
            value: 5,
            color: "hsl(48, 70%, 50%)"
        },
        salt: {
            id: "salt",
            label: "salt",
            value: 2,
            color: "hsl(48, 70%, 50%)"
        },
        rest: {
            id: "rest",
            label: "rest",
            value: 13,
            color: "hsl(48, 70%, 50%)"
        }
    }

    const [state, setState] = useState(initialState)

    const tabel = []
    tabel.push(state.fats, state.proteins, state.carbs, state.salt, state.rest)

    return (
        tabel

    )
}