import React from 'react';
import { Navbar } from 'react-bootstrap';
// import './Header.css'


class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar className="d-flex align-items-center justify-content-center sticky-top"  bg="dark" data-bs-theme="dark">                    
          <Navbar.Brand><h2 className = "brand">Horned Beasts</h2></Navbar.Brand>
        </Navbar>
      </>
    )
  }
}

export default Header;

