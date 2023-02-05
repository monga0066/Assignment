import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center" style={{backgroundColor: "#746AFD",borderRadius:"0",height:"300px"}}>
      
      <Card.Body>
        <Card.Title style={{color: "white",fontSize:"40px"}}>Special title treatment</Card.Title>
      
        <Button style={{marginRight:"40px"}} variant="danger">Get Started</Button>
        <Button variant="outline-light">Learn</Button>
      </Card.Body>
    
    </Card>
  );
}

export default HeaderAndFooterExample;