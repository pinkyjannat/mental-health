import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import CustomLink from '../../CustomLink/CustomLink';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <CustomLink  className='text-light text-decoration-none fs-4' to="/home">Home</CustomLink>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <CustomLink className='px-4  text-light text-decoration-none fs-4' to="/login">Login</CustomLink>
      <CustomLink  className=' px-2 text-light text-decoration-none fs-4' to="/checkout">CheckOut</CustomLink>
      <CustomLink  className='  px-2 text-light text-decoration-none fs-4' to="/signup">SignUp</CustomLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;