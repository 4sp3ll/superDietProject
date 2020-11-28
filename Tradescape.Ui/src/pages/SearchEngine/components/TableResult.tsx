import * as React from 'react';
import styled from "styled-components";
import {Table} from 'reactstrap';
import ApiResult from '../containers/ApiResult'

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
                            <th style={{padding: '9px 5px 9px 5px'}}>Informacje o produkcie</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Cena - Prowizja = Net</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Prowizja %</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Obrót</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Sprzedanych szt.</th>
                            <th style={{padding: '9px 5px 9px 5px'}}>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ApiResult></ApiResult>
                    </tbody>
                </Table>
            </WhiteBackground>
        </div>
    )
}

export default TableResult