import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { RESET_NUTRI } from '../../../actions/constants/basicFiltersConstants'
import { RESET_CATEGORIES } from '../../../actions/constants/categoriesConstants'

export default function ResetButton(): ReactElement {

    const dispatch = useDispatch()

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""))
        Array.from(document.querySelectorAll("select")).forEach(option => (option.value = "every"))
        document.getElementById('everywhere')?.click()
      }

    return (
    <>
        <Button
        className='float-right'
        variant='white'
        size='lg'

        onClick={() => {
            dispatch({type: RESET_NUTRI});
            dispatch({type: RESET_CATEGORIES});
            handleReset()
        }}
        >
            Reset
        </Button>
    </>
    )
}
