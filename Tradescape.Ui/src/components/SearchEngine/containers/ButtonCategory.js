import React from 'react'
import { store } from '../../../index'
import { Label } from 'reactstrap'
import styled from "styled-components";


const StyledInput = styled.input`{
    width: 15px ;
    height: 15px ;
    text-align: center;
    vertical-align: middle;
}`

// type Props = Readonly<{
//     id: number,

// }>

const ButtonCategory = (props) => {
    return (
        <>
        <div id='szukam' style={{ height: '40px'}}>
                <Label className="categories-container" check style={{ fontSize: '15px', margin: '0 0 0 0', padding: '5px 0 0 35px' }} for={props.id}>
                    <StyledInput type="checkbox" id={props.id} onClick={(e) => {
                        if (e.target.checked) {
                            const action = {
                                type: 'CATEGORY_ADD',
                                payload: {
                                    id: props.id,
                                    name: props.name,
                                    leaf: props.leaf
                                }
                            }
                            // TUTAJ SIĘ CHYBA DZIEJE COŚ BARDZO ZŁEGO -  DO SPRAWDZENIA
                            store.dispatch(action)
                        } else {
                            const action = {
                                type: 'CATEGORY_REMOVE',
                                payload: {
                                    id: props.id,
                                    name: props.name,
                                }
                            }
                            store.dispatch(action)
                        }
                    }} /><div style={{ display: 'inline-block', margin: 'auto' }}>&nbsp;{props.name}</div>
                    <span class="categories-checkmark"></span>
                </Label>
            </div>
        </>
    );

};

export default ButtonCategory;