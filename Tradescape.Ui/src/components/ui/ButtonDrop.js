import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




const ButtonDropDown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="sm" style={{ backgroundColor: 'white', color: 'black', borderStyle: "none", fontFamily: "Nunito", fontSize: "15px" }}>
        Moje konto
      </DropdownToggle>
      <DropdownMenu>

        <DropdownItem>Ustawienia</DropdownItem>
        <DropdownItem>Moje dane</DropdownItem>
        <DropdownItem>Płatności</DropdownItem>
        <DropdownItem>Faktury</DropdownItem>
        <DropdownItem divider />
        <DropdownItem style={{ color: "green" }}>Wszystkie Tutoriale</DropdownItem>
        <DropdownItem disabled style={{ color: "red" }}>Konto ważne do: 12-12-2020</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Wyloguj</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default ButtonDropDown;