import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Logout from '../pages/Auth/Logout'
import { Link } from 'react-router-dom'
import { useAuth } from '../pages/Auth/contexts/AuthContext'


const ButtonDropDown = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <DropdownButton
      variant='white'
      title={`Welcome, ${JSON.stringify(currentUser.email).slice(1,-1).split('@')[0]}`}
      >
          <Dropdown.Item>
            <Link to='/dashboard'>
            <div className='w-100 text-center mt-2'>Settings</div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Logout/></Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default ButtonDropDown;