import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Logout from '../Auth/Logout'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/contexts/AuthContext'


const ButtonDropDown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const { currentUser } = useAuth()

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
      <DropdownToggle caret size="sm" style={{ backgroundColor: 'white', color: 'black', borderStyle: "none", fontFamily: "Nunito", fontSize: "15px" }}>
        {`Welcome, ${JSON.stringify(currentUser.email).slice(1,-1).split('@')[0]}`}
      </DropdownToggle>
      <DropdownMenu>

        <DropdownItem>
          <Link to='/dashboard'>
          <div className='w-100 text-center mt-2'>Settings</div>
          </Link>
          </DropdownItem>
        <DropdownItem divider />
        <DropdownItem><Logout/></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default ButtonDropDown;