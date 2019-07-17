import React, {Component} from 'react';
import '../css/Experience.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Experience extends Component {
  render() {
    return(
      <div className="experience-cards">
      <Card>
        <Card.Body>
          <Card.Title>Ecoation Innovative Solutions Inc. (EIS)</Card.Title>
          <Card.Title>Embedded Software Engineer</Card.Title>
          <Card.Text>
            Hello world
          </Card.Text>
          <Button variant="primary">Github</Button>
        </Card.Body>
      </Card>
      <hr/>
      <Card>
        <Card.Body>
          <Card.Title>KnowledgeTech Software Consulting</Card.Title>
          <Card.Title>Solutions Architect</Card.Title>
          <Card.Text>
            Hello world
          </Card.Text>
          <Button variant="primary">Github</Button>
        </Card.Body>
      </Card>
      </div>
    )
  }


}

export default Experience

