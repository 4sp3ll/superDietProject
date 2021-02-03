import React, { ReactElement } from 'react'
import { useYourProportionFromDatabase } from '../../../firebase/yourProporitonsDatabase'
import { Table } from 'reactstrap'


export default function YourProportionTable(): ReactElement {

    const proportions = useYourProportionFromDatabase()
    return (
        <>
        <Table bordered size='sm' >
            <thead>
                <tr>
                <th>Carbs</th>
                <th>Proteins</th>
                <th>Fats</th>
                <th>Salt</th>
                <th>Kcal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{proportions.map((e: any) => e.carbs)}</td>
                <td>{proportions.map((e: any) => e.proteins)}</td>
                <td>{proportions.map((e: any) => e.fats)}</td>
                <td>{proportions.map((e: any) => e.salt)}</td>
                <td>{proportions.map((e: any) => e.kcal)}</td>
                </tr>
            </tbody>
            </Table>
        </>

    )
}
