import React, { ReactElement } from 'react'
import { Table } from 'reactstrap'

interface Props {

}


export default function YourProportionsTable({}: Props): ReactElement {
    return (
        <div>
            <Table bordered size='sm'>
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
                <td>20</td>
                <td>80</td>
                <td>180</td>
                <td>5</td>
                <td>2200</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}
