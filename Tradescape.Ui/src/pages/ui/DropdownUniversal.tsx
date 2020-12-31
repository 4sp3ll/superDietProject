import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import allActions from '../../actions/index'


const StyledSelect = styled.select`{
  margin: .8vh 0 .8vh 0;
}`

interface Props {
  nutrition: string,
}

const DropdownUniversal = ({ nutrition }: Props) => {
  const [dropdownState, setDropdownState] = useState('every')
  const dispatch = useDispatch()

  useEffect(() => {
   if ( nutrition === 'Carbohydrates' ) {
     dispatch(allActions.minCarbo(dropdownState))
   }
   if ( nutrition === 'Proteins' ) {
     dispatch(allActions.minProtein(dropdownState))
   }
   if ( nutrition === 'Fats' ) {
     dispatch(allActions.minFat(dropdownState))
   }
  }, [dropdownState])

  const updateField = (e: string) => {
    setDropdownState(e);
  };

  return (
    <>
      <StyledSelect className="form-control" name={nutrition} onChange={(e: ChangeEvent) => updateField((e.target as HTMLInputElement).value)}>
          <option selected value="every">{nutrition}</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
      </StyledSelect>
    </>
    )
}


export default DropdownUniversal;