import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Capture from "./image/Capture.PNG"
import "./App.css"
function HeaderAndFooterExample() {
  return (
    <>
    
    <Card className="text-center main" style={{backgroundColor: "#746AFD",borderRadius:"0",height:"365px"}}>
      
      <Card.Body>
        <Card.Title style={{color: "white",fontSize:"40px"}}>Special title treatment</Card.Title>
      
        <Button style={{marginRight:"40px"}} variant="danger">Get Started</Button>
        <Button variant="outline-light">Learn More</Button>
      </Card.Body>
    
    </Card>
    <Container className="position" style={{margin:"auto",width:"41%"}}>
    <img style={{width:"100%"}} src={Capture} alt="coffee" className='img-fluid'/>
    </Container>
    
    </>
  );
}

export default HeaderAndFooterExample;