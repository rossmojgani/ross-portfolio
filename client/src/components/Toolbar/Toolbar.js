import React, { Component } from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link, animateScroll as scroll } from "react-scroll";
import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button"> 
        <DrawerToggleButton click={this.props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a onClick={() => scroll.scrollToTop()}>Ross Portfolio</a>
        {/*<a href="/">Ross Portfolio</a>*/}
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a
              key='#about-body'
              href='#about-body'
            >
              About me
            </a>
            {/*<a href="/about">About me</a>*/}
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
    {/*<a href="/projects">Projects</a>*/}
          </li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/contact">Contact</a></li>
          <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>
        </ul>
      </div>
    </nav>
  </header>
  );
  }
}

export default Toolbar;
