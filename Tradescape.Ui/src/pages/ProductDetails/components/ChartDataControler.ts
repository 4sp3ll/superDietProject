import {SetStateAction, useState} from 'react'

interface Props {
    carbohydrates: number | string,
    fat: number | string,
    proteins: number | string,
    salt: number | string
}

export const ChartDataControler = (props: Props) => {

    const {
        carbohydrates,
        fat,
        proteins,
        salt
    } = props

    const carbohydratesNumber =  parseFloat(Number(carbohydrates).toFixed(1))
    const fatNumber = parseFloat(Number(fat).toFixed(1))
    const proteinsNumber = parseFloat(Number(proteins).toFixed(1))
    const saltNumber = parseFloat(Number(salt).toFixed(1))
    const rest = parseFloat((100 - carbohydratesNumber - fatNumber - proteinsNumber - saltNumber).toFixed(1))

    const nutri = {
        fats:  {
            id: "fats",
            label: "fat",
            value: fatNumber,
            color: "hsl(48, 70%, 50%)"
        },
        proteins: {
            id: "proteins",
            label: "proteins",
            value: proteinsNumber,
            color: "hsl(48, 70%, 50%)"
        },
        carbs: {
            id: "carbohydrates",
            label: "carbohydrates",
            value: carbohydratesNumber,
            color: "hsl(103, 70%, 50%)"
        },
        salt: {
            id: "salt",
            label: "salt",
            value: saltNumber,
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