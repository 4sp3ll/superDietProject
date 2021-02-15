import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import allActions from '../actions/index'

const StyledSelect = styled.select`{
  margin: .8vh 0 .8vh 0;
}`

interface Props {
  nutrition: string,
  func? : any
}

const DropdownUniversal = (props: Props) => {
  const [dropdownState, setDropdownState] = useState('every')
  const dispatch = useDispatch()

  useEffect(() => {
   if ( props.nutrition === 'Carbohydrates' ) {
     dispatch(allActions.minCarbo(dropdownState))
    //  dispatch(allActions.requestNutrimentLengthAdd())
   }
   if ( props.nutrition === 'Proteins' ) {
     dispatch(allActions.minProtein(dropdownState))
   }
   if ( props.nutrition === 'Fats' ) {
     dispatch(allActions.minFat(dropdownState))
   }
  }, [dropdownState])

  const updateField = (e: string) => {
    setDropdownState(e);
  };


  return (
    <>
      <StyledSelect
      style={{padding: '0 .5rem'}}
      className="form-control"
      name={props.nutrition}
      onChange={(e: ChangeEvent) => {
        updateField((e.target as HTMLInputElement).value);
        }}
      >
          <option selected value="every">{props.nutrition}</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
      </StyledSelect>
    </>
    )
}


export default DropdownUniversal;