import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/Logo.svg';
// #E7E9F1 old colour
const Header = (props) =>(
    <Navbar expand="lg" style={{ backgroundColor: '#ffffff', height:'100%' }}>
        <Navbar.Brand href="/">
        <img
            alt="Invictus Analytics"
            src={ logo }
            width="auto"
            height="55"
            className="d-inline-block align-top"
            style={{ paddingLeft: '20%' }}
        />  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto1"></Nav>
                <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#" onClick={()=> props.scrollToAboutUs()}>About</Nav.Link>
                {/* <Nav.Link href="/porfolio">Portfolio</Nav.Link> */}
                <Nav.Link href="/adminLogin">Admin</Nav.Link>
                <Nav.Link href="/customerLogin">Customer</Nav.Link>
                <Nav.Link href="#" onClick={()=>props.scrollToContact()}>Contact</Nav.Link>
                </Nav>
        </Navbar.Collapse>
      </Navbar>
);

export default Header;