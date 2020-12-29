import * as React from 'react';
import styled from "styled-components";
import {Table} from 'reactstrap';
import ChosenProductsList from '../containers/ChosenProductsList'

const WhiteBackground = styled.div`{
    background-color: white;
}
`
const TableResult = ({mobile}: any) => {
    return (
                    <thead style={{fontSize: '.8em'}}>
                        <tr>
                            {mobile?
                            <>
                            <th>Add</th>
                            <th>Photos</th>
                            <th>Name</th>
                            </>
                            :
                            <>
                            <th>Add</th>
                            <th>Photos</th>
                            <th>Name</th>
                            <th>Carbohydrates per 100g</th>
                            <th>Proteins per 100g</th>
                            <th>Fats per 100g</th>
                            <th>Salt</th>
                            <th>Fiber</th>
                            <th>Some possible allergens:</th>
                            <th>Shops tags:</th>
                            <th>Additional options:</th>
                            </>
                            }
                        </tr>
                    </thead>
    )
}

export default TableResult