import React, {useState, useEffect} from 'react'
import { store } from '../../../index'
import { Label } from 'reactstrap'
import styled from "styled-components";


const StyledInput = styled.input`{
    width: 15px ;
    height: 15px ;
    text-align: center;
    vertical-align: middle;
}`

// type Props = {
//     id: string,
//     name: string,
//     special: boolean,
//     products: number
// }

const ButtonCategory = (props) => {

    const [checkedIds, setCheckedIds] = useState(new Set());
    const {id, name, special, products} = props

    const handleCheck = ({ id, checked }) => {
        console.log(id, checked, checkedIds)
        if (checked) {
          if (id === "everywhere") {
            checkedIds.clear();
          } else {
            checkedIds.delete("everywhere");
          }
          checkedIds.add(id);
        } else {
          checkedIds.delete(id);
        }
        setCheckedIds(new Set(checkedIds));
      };

    return (
        <>
        <div className='szukam' style={{ height: '40px'}}>
                <Label className="categories-container" check style={{ fontSize: '14px', margin: '0 0 0 0', padding: '5px 0 0 35px' }} for={id}>

                    <StyledInput
                    type="checkbox"
                    id={id}
                    // checked={special ? checkedIds.has("everywhere") : checkedIds.has(id)}
                    checked={checkedIds.has(id)}
                    onChange={(e) => handleCheck(e.target)}
                    onClick={(e) => {
                        if (e.target.checked) {
                            const action = {
                                type: 'CATEGORY_ADD',
                                payload: {
                                    id,
                                    name,
                                }
                            }
                            // TUTAJ SIĘ CHYBA DZIEJE COŚ BARDZO ZŁEGO -  DO SPRAWDZENIA -- note: gdzie jest reducer?
                            store.dispatch(action)
                        } else {
                            const action = {
                                type: 'CATEGORY_REMOVE',
                                payload: {
                                    id,
                                    name,
                                }
                            }
                            store.dispatch(action)
                        }
                    }} /><div style={{ display: 'inline-block', margin: 'auto' }}> {name} {special ?  null : `(${products})`}</div>
                    <span class="categories-checkmark"></span>
                </Label>
            </div>
        </>
    );

};

export default ButtonCategory;