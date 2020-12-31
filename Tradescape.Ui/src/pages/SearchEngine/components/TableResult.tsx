import * as React from 'react';
import styled from "styled-components";
import {Table} from 'reactstrap';
import ChosenProductsList from '../containers/ChosenProductsList'

const WhiteBackground = styled.div`{
    background-color: white;
}
`
const Th = styled.th`{
    white-space: nowrap;
}`
const TableResult = ({mobile}: any) => {

    return (
                    <thead style={{fontSize: '1.0em'}}>
                        <tr>
                            {mobile?
                            <>
                            <Th>Add</Th>
                            <Th>Photos</Th>
                            <Th>Name</Th>
                            </>
                            :
                            <>
                            <Th>Add</Th>
                            <Th>Photos</Th>
                            <Th>Name</Th>
                            <Th>Carbohydrates per 100g</Th>
                            <Th>Proteins per 100g</Th>
                            <Th>Fats per 100g</Th>
                            <Th>Salt</Th>
                            <Th>Fiber</Th>
                            <Th>Some possible allergens:</Th>
                            <Th>Shops tags:</Th>
                            <Th>Additional options:</Th>
                            </>
                            }
                        </tr>
                    </thead>
    )
}

export default TableResult