import React, { Component }  from 'react'; 
import { Grid, Cell } from 'react-mdl'; 
import '../css/About.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import avatar from '../images/avatar2.jpg'; 

class About extends Component { render() {
    return(
      <div className="about-body" id={'about'}>
        <div className="about-img">
          <h2>Ross Mojgani</h2>
          <img src={avatar} alt="avatar" style={{width: '100%'}}/>
          </div>
        <div className="about-text">
            <h2>About me</h2>
            <p style={{paddingTop: '1em'}}>I'm a 3rd year UBC Computer Engineering Student currently on a 8 month internship as a Firmware Engineer at Intel on the Non-Volatile Memory Solutions Group (NSG).</p>
            <p style={{paddingTop: '1em'}}>In my spare time I am a Software Developer for the UBC Unmanned Aircraft Systems Engineering Design Team. I work with the software sub-team on developing code for a relay module for low latency communication between the drone flight controller and ground control software.</p> 
            <p style={{paddingTop: '1em'}}>I'm interested in collaborating with others towards interesting projects, or to discuss future technologies. Contact me using any of the links above or below and I'll get back to you as soon as I can. </p>
          </div>
        </div>
   )
 }
}
export default About

