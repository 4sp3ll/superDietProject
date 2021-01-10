import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink, NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../utils/images/logo.png'
import ButtonDropDown from "./ui/ButtonDrop"
import BadgeNav from "./ui/Badge"
import ButtonNavStandard from './ui/ButtonNavStandard'
import './NavMenu.css';
import Logout from './Auth/Logout'


export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
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
                {/*  */}
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/wyszukiwarka-produktow">
                      <ButtonNavStandard
                      name={'Wyszukiwarka produktów'}
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/szczegoly-oferty">
                      <ButtonNavStandard
                      name={'Szczegóły oferty'}
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/raport-kategorii">
                      <ButtonNavStandard
                      name={'Raport kategorii'}
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/moje-produkty" >
                      <BadgeNav
                      title={'My journey'}
                      amount={'30'}
                      />
                    </NavLink>
                  </NavItem>
                  <NavItem style={{ margin: "4px 4px 0px 4px", padding: "4px 0 4px 0" }}>
                    <ButtonDropDown/>
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
