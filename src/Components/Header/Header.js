import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <CustomLink  className='text-light text-decoration-none fs-4' to="/home">Home</CustomLink>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <CustomLink  className=' px-2 text-light text-decoration-none fs-4' to="/checkout">CheckOut</CustomLink>
      <CustomLink  className=' px-2 text-light text-decoration-none fs-4' to="/checkout">Blogs</CustomLink>
      <CustomLink  className=' px-2 text-light text-decoration-none fs-4' to="/checkout">About</CustomLink>
    </Nav>
    <Nav.Link href='#bio'>Bio</Nav.Link>
    <Nav>
    {
          
            user ?  <Nav.Link onClick={handleSignOut} as={Link} to='/login'>SingOut</Nav.Link> :  <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          
          
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;