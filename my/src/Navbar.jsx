import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar style={{backgroundColor: "#6A61E8"}} variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  style={{color: "white"}} href="#action1">Home</Nav.Link>
            <Nav.Link style={{color: "white"}} href="#action2">Services</Nav.Link>
            <Nav.Link style={{color: "white"}} href="#action2">About US</Nav.Link>
            <Nav.Link  style={{color: "white"}} href="#">
              How it Works
            </Nav.Link>
          </Nav>
          
            <Button variant="danger">Get Started</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;