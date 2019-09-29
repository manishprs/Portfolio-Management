import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/invictusLogo.svg';

const Header = () =>(
    <Navbar expand="lg" style={{ backgroundColor: '#E7E9F1' }}>
        <Navbar.Brand href="#">
        <img
            alt="Invictus Analytics"
            src={ logo }
            width="auto"
            height="35"
            className="d-inline-block align-top"
            style={{ marginLeft: '20%' }}
        />  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="/adminLogin">AdminLogin</Nav.Link>
                <Nav.Link href="/customerLogin">CustomerLogin</Nav.Link>
                <Nav.Link href="/porfolio">Portfolio</Nav.Link>
                </Nav>
        </Navbar.Collapse>
      </Navbar>
);

export default Header;