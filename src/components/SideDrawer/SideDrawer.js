import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
    
  return (
    <nav className={drawerClasses}>
      <ul>
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
        {/*<li><a href="/about">About me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>*/}
      </ul>
    </nav>
  );
};

export default sideDrawer;
