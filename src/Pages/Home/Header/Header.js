import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../../image/icon.png'
const Header = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand>
      <img className='icon' src={icon} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to = '/home'>Home</Nav.Link>
     
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to = '/about' >About</Nav.Link>
      <Nav.Link as={Link} to = '/manage' >Manage </Nav.Link>
      <Nav.Link as={Link} to = '/add' >Add </Nav.Link>
      <Nav.Link as={Link} to = '/items' >My items</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to= '/login'>
      Login 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;