import React, {useState} from 'react'
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input
} from 'reactstrap'


const CategoriesDropdown: React.FC = () => {

    const initialState = {
        categoryId: null,
        categoryName: null,
        leaf: false
    }

    const [state, setState] = useState(initialState)
    // const [dropdownOpen, setOpen] = useState(false);
    // const toggle = () => setOpen(!dropdownOpen);

    const handlerElementId = () => {

    }

    return (
        <>
        <Input type="select" name="select" id="exampleSelect">
            <option >Wybierz kategorię</option>
            {/* id={handlerElementId()} */}
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Input>
        </>             
    )
}

export default CategoriesDropdown