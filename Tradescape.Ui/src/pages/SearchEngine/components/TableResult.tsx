import * as React from 'react';
import styled from "styled-components";

const Th = styled.th`{
    white-space: nowrap;
    position: sticky;
    top: 0;
    z-index: 10;
    background: white;
    box-shadow: 0 1.5px 1.5px -1px rgba(0, 0, 0, 0.4);
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