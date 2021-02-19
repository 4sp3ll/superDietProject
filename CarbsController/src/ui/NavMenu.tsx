import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink, NavbarBrand, } from 'reactstrap';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../utils/images/logo_2_uk2.png'
import ButtonDropDown from "./ButtonDrop"
import BadgeNav from "./Badge"
import './NavMenu.css';


export default class NavMenu extends React.PureComponent<{accAge: number | undefined}, { isOpen: boolean }> {
  public state = {
    isOpen: false
  };

  public render() {
    return (

      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom mb-3" light style={{ boxShadow: '0 5px 6px -6px #777', backgroundColor: '#FFFFFF', padding: '7px 18px 7px 0' }}>
            <NavbarBrand tag={Link} to="/" className='mr-auto' style={{padding: '0 0 0 5%'}}><img src={Logo}/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" style={{margin: '0 0 0 0'}} />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse " isOpen={this.state.isOpen} navbar>
                <ul className="navbar-nav flex-grow" style={{padding: '0 5% 0 5%'}} >

                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/find-product">
                      <Button
                      variant='white'
                      name={'Find products'}
                      >
                        Find Product
                      </Button>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/my-journey" >
                      <BadgeNav
                      title={'My journey'}
                      amount={this.props.accAge}
                      />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <ButtonDropDown/>
                    </NavLink>
                  </NavItem>
                </ul>
            </Collapse>
        </Navbar>
      </header >
    );
  }

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}
