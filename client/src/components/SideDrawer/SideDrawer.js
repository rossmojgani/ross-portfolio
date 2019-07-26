import React from 'react';

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
        {/*<li><a href="/about">About me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>*/}
      </ul>
    </nav>
  );
};

export default sideDrawer;
