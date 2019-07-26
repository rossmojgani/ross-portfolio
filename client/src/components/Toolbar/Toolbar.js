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
        <a style={{color: 'white'}}onClick={() => scroll.scrollToTop()}>Ross Portfolio</a>
        {/*<a href="/">Ross Portfolio</a>*/}
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a
              key='#about'
              href='#about'
            >
              About me
            </a>
            {/*<a href="/about">About me</a>*/}
          </li>
          <li>
            <a
              key='#projects'
              href='#projects'
            >
              Projects
            </a>
            {/*<a href="/projects">Projects</a>*/}
          </li>
          <li>
            <a
              key='#experience'
              href='#experience'
            >
              Experience
            </a>
          {/*<a href="/experience">Experience</a>*/}
          </li>
          <li>
            <a
              key='#contact'
              href='#contact'
            >
              Contact
            </a>
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
