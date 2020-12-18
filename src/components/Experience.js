import React, {Component} from 'react';
import '../css/Experience.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Intel from '../images/intel.jpg';
import NetApp from '../images/netapp.jpg';
import Ecoation from '../images/ecoaction.png';
import Coast from '../images/coast_capital_crop.jpg';
import UAS from '../images/UAS.png';
import MarsColony from '../images/ubc_mars_colony.png';

class Experience extends Component {
  render() {
    return(
      <div className="experience-cards" id={'experience'} >
        <h1 className="experience-header">Experience</h1> 

        <div className="experience-card">
          <img className="experience-img" src={Intel} alt="" />
          <div className="experience-back" />
          <div className="experience-text" >
              <img className="img-small" src={Intel} alt="" />
              <h3 className="position">Firmware Engineer Intern</h3>
              <h4 className="team">Intel</h4>
              <p className="experience-date">May 2020 - December 2020 (8 mos)</p>
              <ul className="description">
                <li>Implemented APIs in C++ which required design to follow NVMe specification for new SSD controller</li>
                <li>Integrated APIs into production firmware using C to interface with drivers agnostic of underlying hardware</li>
                <li>Improved CI process by developing off-target and on-target unit tests on FPGA emulation platform for API methods</li>
              </ul>
          </div>
        </div>

        <div className="experience-card">
          <img className="experience-img" src={NetApp} alt="" />
          <div className="experience-back" />
          <div className="experience-text" >
              <img className="img-small" src={NetApp} alt="" />
              <h3 className="position">Software Engineer Intern</h3>
              <h4 className="team">NetApp</h4>
              <p className="experience-date">January 2020 - April 2020 (4 mos)</p>
              <ul className="description">
                <li>Designed and implemented software in C/C++ to report top 100 user storage data sent in scheduled support emails</li>
                <li>Built functionality in a management REST API using Ruby to handle data storage profile creation</li>
                <li>Delivered an alert UI service to notify user when Java heap memory usage is too high for an admin node</li>
                <li>Integrated into StorageGRID engineering team to refine S3 object store to manage unstructured data at scale</li>
              </ul>
          </div>
        </div>
    <div className="experience-card">
          <img className="experience-img" src={Ecoation} alt="" />
          <div className="experience-back" />
          <div className="experience-text" >
              <img className="img-small" src={Ecoation} alt="" />
              <h3 className="position">Embedded Software Engineer Intern</h3>
              <h4 className="team">Ecoation</h4>
              <p className="experience-date">May 2019 - December 2019 (8 mos)</p>
              <ul className="description">
                <li>Designed communication between embedded devices and backend services by utilizing AWS IoT</li>
                <li>Developed an end-to-end simulator ROS node to refine final product through unit and integration testing workflow</li>
                <li>Automated provisioning of new production devices through OO Python design for increased team productivity</li>
                <li>Formulated 10+ Jenkins CI jobs to manage workflow by establishing key build prerequisites prior to merge</li>
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
                <li>Maintained stability of application by communicating features to 3 development team members in formal reports</li>
                <li>Configured QA environment and designed integration tests before deploying to production</li>
                <li>Produced requirements for reconciliation application for 3 transaction types such as eTransfer, ATM, and TFSA</li>
                <li>Refactored web application design requirements to handle sensitive customer information daily</li>
              </ul>
          </div>
        </div>

        <h1 className="experience-header">Engineering Design Teams</h1> 

        <div className="experience-card">
          <img className="experience-img" src={UAS} alt="" />
          <div className="experience-back" />
          <div className="experience-text" >
              <img className="img-small" src={UAS} alt="" />
              <h3 className="position">Software Developer</h3>
              <h4 className="team">UBC Unmanned Aircraft Systems</h4>
              <p className="experience-date">July 2019 - Present</p>
              <ul>
                <li>Fully self-designed a relay module for low latency communication between flight controller and control software</li>
                <li>Develop vital drone software implemented on hardware such as Raspberry Pi</li>
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
              <p className="experience-date">December 2017 - September 2019 (1 yr 10 mos)</p>
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

