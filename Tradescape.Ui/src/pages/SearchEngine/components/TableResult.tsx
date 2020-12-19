import * as React from 'react';
import styled from "styled-components";
import {Table} from 'reactstrap';
import ChosenProductsList from '../containers/ChosenProductsList'

const WhiteBackground = styled.div`{
    background-color: white;
}
`
const TableResult: React.FC = () => {
    return (
        <div style={{ boxShadow: '0 0 6px .5px #777', borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem', borderBottomLeftRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}>
            <WhiteBackground>
                <Table bordered>
                    <thead style={{fontSize: '.8em'}}>
                        <tr>
                            {/* <th>>Dodaj</th> */}
                            <th style={{padding: '9px 5px 9px 5px'}}>Photos</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Name</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Carbohydrates per 100g</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Proteins per 100g</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Fats per 100g</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Some possible allergens:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <SearchFilteredProductsApi/> */}
                        <ChosenProductsList/>
                    </tbody>
                </Table>
            </WhiteBackground>
        </div>
    )
}

export default TableResult