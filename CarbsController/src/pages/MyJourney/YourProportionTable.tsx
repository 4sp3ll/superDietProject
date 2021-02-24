import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useYourProportionFromDatabase } from '../../firebase/yourProporitonsDatabase'
import { Table } from 'react-bootstrap'


export default function YourProportionTable(): ReactElement {

    useYourProportionFromDatabase()
    const proportions = useSelector((state: any) => state.firestore.data.proportions)

    return (
        <>
        <h3 style={{textAlign: 'center'}}>Your daily proportions</h3>
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
                <td>{proportions ? proportions.carbs : ''}</td>
                <td>{proportions ? proportions.proteins : ''}</td>
                <td>{proportions ? proportions.fats : ''}</td>
                <td>{proportions ? proportions.salt : ''}</td>
                <td>{proportions ? proportions.kcal : ''}</td>
                </tr>
            </tbody>
            </Table>
        </>

    )
}
