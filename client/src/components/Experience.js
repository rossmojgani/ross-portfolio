import React, {Component} from 'react';
import '../css/Experience.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Experience extends Component {
  render() {
    return(
      <div className="experience-cards">
      <Card>
        <Card.Header>Ecoation</Card.Header>
        <Card.Body>
          <Card.Title>Embedded Software Engineer</Card.Title>
          <Card.Text>
            Hello world
          </Card.Text>
          <Button variant="primary">Github</Button>
        </Card.Body>
      </Card>
      <hr/>
      <Card>
        <Card.Header>Ecoation</Card.Header>
        <Card.Body>
          <Card.Title>Embedded Software Engineer</Card.Title>
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

