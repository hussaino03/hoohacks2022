
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav style={{ backgroundColor: '#9ce36f' }}>
        <Bars />
  
        <NavMenu >
          <NavLink to='/' activeStyle >
            Home
          </NavLink>
          <NavLink to='/plants' activeStyle>
            User
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/images' activeStyle>
            Images
          </NavLink>
          <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/login' activeStyle>
            Login
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;