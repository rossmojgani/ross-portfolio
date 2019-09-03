import React, { Component } from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link, animateScroll as scroll } from "react-scroll";
import './Toolbar.css';
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor';

class Toolbar extends Component {
  render() {
    return (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button"> 
        <DrawerToggleButton click={this.props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a style={{color: 'white'}}onClick={() => scroll.scrollToTop()}>Ross Portfolio</a>
        {/*<a href="/">Ross Portfolio</a>*/}
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-130}
            duration= {500}
            >
              Home
            </Link>
            {/*<a href="/about">About me</a>*/}
          </li>
          <li>
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >
              About me
            </Link>
            {/*<a href="/about">About me</a>*/}
          </li>
          <li>
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >
              Projects
            </Link>
            {/*<a href="/projects">Projects</a>*/}
          </li>
          <li>
            <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >
              Experience
            </Link>
          {/*<a href="/experience">Experience</a>*/}
          </li>
          <li>
            <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >
              Contact
            </Link>
            {/*<a href="/contact">Contact</a>*/}
            </li>
        </ul>
      </div>
    </nav>
  </header>
  );
  }
}

export default Toolbar;
