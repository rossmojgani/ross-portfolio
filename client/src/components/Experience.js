import React, {Component} from 'react';
import '../css/Experience.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ecoation from '../images/ecoation.png';
import Ecoation2 from '../images/ecoaction.png';
import Coast from '../images/coast_capital.jpg';
import Coast2 from '../images/coast_capital_crop.jpg';
import MarsColony from '../images/ubc_mars_colony.png';

class Experience extends Component {
  render() {
    return(
      <div className="experience-cards">
        
        <div className="experience-card">
          <img className="ecoation-img" src={Ecoation2} alt="" />
          <div className="experience-back" >
          <div className="experience-text" >
          <h3>Ecoation Innovative Solutions Inc. (EIS)</h3>
          <h4>Embedded Software Engineer Intern</h4>
              <ul>
                <li>Developed an end-to-end simulator to refine final product through unit and integration testing</li>
                <li>Formulated 10+ Jenkins CI jobs to manage workflow by establishing key build prerequisites prior to merge</li>
                <li>Automated codebase documentation process by writing Python scripts for increased team productivity</li>
              </ul>
          </div>
          </div>
        </div>

        <div className="experience-card">
          <img className="ecoation-img" src={Coast2} alt="" />
          <div className="experience-back" >
          <div className="experience-text" >
          <h3>Coast Capital Savings Credit Union</h3>
          <h4>Solutions Architect Intern</h4>
            <ul>
              <li>Refactored web application design requirements to handle sensitive customer information daily</li>
              <li>Maintained stability of application by communicating features to 3 development team members in formal reports</li>
              <li>Configured QA environment and designed integration tests before deploying to production</li>
              <li>Produced requirements for reconciliation application for 3 transaction types such as eTransfer, ATM, and TFSA</li>
            </ul>
          </div>
          </div>
        </div>

        <div className="experience-card">
          <img className="ecoation-img" src={MarsColony} alt="" />
          <div className="experience-back" >
          <div className="experience-text" >
          <h3>UBC Mars Colony</h3>
          <h4>Software Engineer</h4>
            <ul>
              <li>Constructed control systems for door, lighting, and sensor mechanisms in Python and C with SPI and I2C protocols</li>
              <li>Coordinated weekly work sessions and assisted engineers to design scalable and robust software systems</li>
              <li>Develop vital airlock software implemented on hardware such as Raspberry Pi and Arduino Microcontrollers</li>
            </ul>
          </div>
          </div>
        </div>

      </div>
    )
  }


}

export default Experience

