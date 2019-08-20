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
            <p style={{paddingTop: '1em'}}>I'm a 3rd year UBC Computer Engineering Student currently on an 8 month internship as an Embedded Software Engineer at Ecoation Innovative Solutions.</p> 
            <p style={{paddingTop: '1em'}}>In my spare time I am a Software Developer for the UBC Mars Colony Engineering Design Team, and am working with the software sub-team on developing code to control lighting and door systems and read various industry level sensors (CO2, Humidity, Pressure, Temperature, O2) with I2C communication protocols.</p> 
            <p style={{paddingTop: '1em'}}>I'm interested in collaborating with others towards interesting projects, or to discuss future technologies. Contact me using any of the links above or below and I'll get back to you as soon as I can. </p>
          </div>
        </div>
   )
 }
}
export default About

