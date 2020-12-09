import React, { ReactElement, useState, useEffect, ChangeEvent } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux'
import allActions from '../../actions/index'
import styled from 'styled-components'

interface Props {
  nutrition: string,
}

const StyledSelect = styled.select`{
  margin: .8vh 0 .8vh 0;
  width: 35%;
}`

const DropdownUniversal = (props: Props) => {
  const {nutrition} = props
  const [dropdownState, setDropdownState] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
      console.log(dropdownState)
  }, [dropdownState])

  const updateField = (e: string) => {
    setDropdownState({
      [nutrition]: e
    });
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