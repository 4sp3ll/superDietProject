import {SetStateAction, useState} from 'react'

interface Props {
    carbohydrates: number | string,
    fat: number | string,
    proteins: number | string,
    salt: number | string
}

interface ObjectConstructor {
    id: string,
    label: string
    value: number,
    color: string,
}

export const ChartDataControler = (props: Props) => {

    const {
        carbohydrates,
        fat,
        proteins,
        salt
    } = props

    let rest = 100 - Number(carbohydrates) - Number(fat) - Number(proteins) - Number(salt)

    const nutri = {
        fats:  {
            id: "fats",
            label: "fat",
            value: Number(fat),
            color: "hsl(103, 70%, 50%)"
        },
        proteins: {
            id: "proteins",
            label: "proteins",
            value: Number(proteins),
            color: "hsl(48, 70%, 50%)"
        },
        carbs: {
            id: "carbohydrates",
            label: "carbohydrates",
            value: Number(carbohydrates),
            color: "hsl(48, 70%, 50%)"
        },
        salt: {
            id: "salt",
            label: "salt",
            value: Number(salt),
            color: "hsl(48, 70%, 50%)"
        },
        rest: {
            id: "rest",
            label: "rest",
            value: rest,
            color: "hsl(48, 70%, 50%)"
        }
    }

    const [state, setState]: any = useState(nutri)

    const result: object[] = []
    result.push(state.fats, state.proteins, state.carbs, state.salt, state.rest)

    return (
        result
    )
}