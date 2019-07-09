import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
             <a href="/">
               Ross Portfolio
             </a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem
               eventKey={1}
               href="#">
               Home
             </NavItem>
             <NavItem
               eventKey={2}
               href="#">
               Experience
             </NavItem>
             <NavItem
               eventKey={3}
               href="#">
               Experience
             </NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
}

export default Header;
