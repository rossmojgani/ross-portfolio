import React, {Component} from 'react';
import '../css/Experience.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ecoation from '../images/ecoaction.png';
import Coast from '../images/coast_capital_crop.jpg';
import MarsColony from '../images/ubc_mars_colony.png';

class Experience extends Component {
  render() {
    return(
      <div className="experience-cards" id={'experience'} >
        <h1 className="experience-header">Experience</h1> 
    
        <div className="experience-card">
          <img className="experience-img" src={Ecoation} alt="" />
          <div className="experience-back" />
          <div className="experience-text" >
              <img className="img-small" src={Ecoation} alt="" />
              <h3 className="position">Software Engineer Intern</h3>
              <h4 className="team">Ecoation</h4>
              <p className="experience-date">May 2019 - Present (4 mos)</p>
              <ul className="description">
                <li>Developed an end-to-end simulator to refine final product through unit and integration testing</li>
                <li>Formulated 10+ Jenkins CI jobs to manage workflow by establishing key build prerequisites prior to merge</li>
                <li>Automated codebase documentation process by writing Python scripts for increased team productivity</li>
              </ul>
          </div>
        </div>

        <div className="experience-card">
          <img className="experience-img" src={Coast} alt="" />
          <div className="experience-back" />
          <div className="experience-text" >
              <img className="img-small" src={Coast} alt="" />
              <h3 className="position">Solutions Architect Intern</h3>
              <h4 className="team">Coast Capital Savings</h4>
              <p className="experience-date">May 2018 - August 2018 (4 mos)</p>
              <ul>
                <li>Refactored web application design requirements to handle sensitive customer information daily</li>
                <li>Maintained stability of application by communicating features to 3 development team members in formal reports</li>
                <li>Configured QA environment and designed integration tests before deploying to production</li>
                <li>Produced requirements for reconciliation application for 3 transaction types such as eTransfer, ATM, and TFSA</li>
              </ul>
          </div>
        </div>

        <div className="experience-card">
          <img className="experience-img" src={MarsColony} alt="" />
          <div className="experience-back" />
          <div className="experience-text" >
              <img className="img-small" src={MarsColony} alt="" />
              <h3 className="position">Software Engineer</h3>
              <h4 className="team">UBC Mars Colony</h4>
              <p className="experience-date">December 2017 - Present (1 yr 9 mos)</p>
              <ul>
                <li>Constructed control systems for door, lighting, and sensor mechanisms in Python and C with SPI and I2C protocols</li>
                <li>Coordinated weekly work sessions and assisted engineers to design scalable and robust software systems</li>
                <li>Develop vital airlock software implemented on hardware such as Raspberry Pi and Arduino Microcontrollers</li>
              </ul>
          </div>
        </div>

      </div>
    )
  }


}

export default Experience

