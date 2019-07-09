import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" classname="white">Ross Mojgani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav ClassName="mr-auto">
            <Nav.Link href="/">Ross Portfolio</Nav.Link>
            <Nav.Link href="/About me">About me</Nav.Link>
            <Nav.Link href="/Experience">Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
