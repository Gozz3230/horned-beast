import React from 'react';
// import './Footer.css'
import { Navbar } from 'react-bootstrap'


class Footer extends React.Component {
    render() {
        return (            
            <Navbar className="d-flex align-items-center justify-content-center sticky-bottom" collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Navbar.Brand> Created by: Ryan Gosselin</Navbar.Brand>                    
            </Navbar>            
        )
    }
}


export default Footer;