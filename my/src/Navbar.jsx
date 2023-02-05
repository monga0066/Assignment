import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './App.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  return (
    <Navbar className="main-navbar"  >
      <Container fluid>
        <Navbar.Brand className="bg-ligth" href="#">Drible</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
          <Nav
            className="my-10 my-lg-0"
            style={{ maxHeight: '100px' }}
        
          >
            <Nav.Link  href="#action1">Home</Nav.Link>
           
            <Nav.Link  href="#" >
              Services
            </Nav.Link>
            <Nav.Link  href="#" >
              About US
            </Nav.Link>
            <Nav.Link  href="#" >
              How it Works
            </Nav.Link>
       
          
            <Button variant="danger">Get Started</Button>
            </Nav>
      
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;