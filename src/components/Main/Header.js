import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Navbar, Nav, Row } from 'react-bootstrap';

// import logo from '../../assets/invictusLogo.svg';
import logo from '../../assets/Logo.svg';

const header = props => {

   let sidebarLeft = null;
   if(props.screenWidth < 992) {
      sidebarLeft= (
         <Icon 
            size="large" 
            name="sidebar" 
            className="pm-sidebar-icon" 
            onClick={ props.sideClick } 
            style={{ padding: '3%', marginLeft: '20%', color: '#464648' }}
         />
      );
   }

   let sidebarRight = null;
   if(props.screenWidth < 768) {
      sidebarRight = (
         <Icon
            size="large"
            name="sidebar"
            onClick={ props.rightClick }
            className="pm-sidebar-icon"
            style={{ padding: '3%', marginLeft: '20%', color: '#464648' }}
         />
      );
   }
   
   return (
      <Row xs={12} className='pm-header'>
         <Navbar>
            {/* <Navbar.Brand href="/">
               <img
                  alt="Invictus Analytics"
                  src={ logo }
                  width="auto"
                  height="55"
                  className="d-inline-block align-top"
                  style={{ marginLeft: '20%' }}
               />  
               { sidebarLeft }          
               { sidebarRight }
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto"></Nav>
               <Nav>
                  <Nav.Link className='header-nav-items' href="/adminLogin">Admin</Nav.Link>
                  <Nav.Link className='header-nav-items' href="/customerLogin">Customer</Nav.Link>
                  <Nav.Link className='header-nav-items' href="/porfolio">Portfolio</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </Row>
   );
}
export default header;