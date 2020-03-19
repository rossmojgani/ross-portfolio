import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import '../css/Projects.css';

class Projects extends Component {

  render() {
    return(
        <div className="category-tabs" id={'projects'}>
        <h1>Projects</h1>


        <Grid>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
        {/* Personal Portfolio */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: "url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/237/hamburger_1f354.png) center / cover"}}>RapidServe</CardTitle>
          <CardText style={{fontWeight: 'bold', marginBottom: '0', paddingBottom: '0'}}>
            Awarded "Best use of MongoDB" at nwHacks 2020
          </CardText>
          <CardText style={{marginTop: '0', paddingTop: '5px'}}>
            RapidServe uses QR codes to allow customers to pay for any item at their restaurant table. Implemented with a React Native frontend and Python Flask API server with a mongoDB database, 
          </CardText>
          <div className="tools" >
          <p>Python</p>
          <p>Mongodb</p>
          <p>Flask</p>
          </div>
          <CardActions border>
            <a href="https://github.com/rossmojgani/rapidserve" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
            <a href="https://devpost.com/software/rapidserve-g1skzh" target="_blank" rel="noopener noreferrer"><Button colored>Demo</Button></a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
        </Card>
        </Cell>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
        {/* Boggle Player */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/237/airplane_2708.png) center / cover'}}>Skylink</CardTitle>
          <CardText>
            Relay module for low latency communication between drone flight controller and ground control software. Skylink intercepts MAVLink protocol GPS message packets and trees them to other nodes in a distributed system through a TCP connection.
          </CardText>
          <div className="tools" >
          <p>Python</p>
          <p>Docker</p>
          <p>MAVLink</p>
          </div>
          <CardActions border>
            <a href="https://github.com/rossmojgani/skylink" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
        </Card>
        </Cell>
        </Grid>


        <Grid>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
        {/* Personal Portfolio */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: "url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/237/man_1f468.png) center / cover"}}>Ross Portfolio</CardTitle>
          <CardText>
            Development portfolio created in React.js to showcase projects, skills, and experience with goal in mind to connect with others sharing the same interests. 
          </CardText>
          <div className="tools" >
          <p>ReactJS</p>
          <p>HTML5</p>
          <p>CSS3</p>
          </div>
          <CardActions border>
            <a href="https://github.com/rossmojgani/ross-portfolio" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
            <a href="https://rossmojgani.github.io" taget="_blank" rel="noopener noreferrer"><Button colored>Demo</Button></a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
        </Card>
        </Cell>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
        {/* Boggle Player */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/facebook/92/video-game_1f3ae.png) center / cover'}}>CPU Boggle Player</CardTitle>
          <CardText>
            Applied graph theory concepts to find all solutions to any dimension Boggle board using graph traversals such a depth first search and breadth first search.
          </CardText>
          <div className="tools" >
          <p>Java</p>
          <p>JUnit</p>
          <p>IntelliJ IDE</p>
          </div>
          <CardActions border>
            <a href="https://github.com/rossmojgani/skylink" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
        </Card>
        </Cell>
        </Grid>


        <Grid>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
        {/* UBC Mars Colony Airlock Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/samsung/46/rocket_1f680.png) center / cover'}}>UBC Mars Colony Airlock</CardTitle>
              <CardText>
                Vital airlock software to control fully functional airlock developed in python and C. Implemented on hardware such as Arduino and Raspberry Pi Microcontrollers.
              </CardText>
              <div className="tools" >
              <p>Python</p>
              <p>C++</p>
              <p>C</p>
              <p>Arduino</p>
              <p>Raspberry Pi</p>
              </div>
              <CardActions border>
                <a href="https://github.com/UBCMarsColony/airlock-masters" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
                <a href="https://ubcmarscolony.wordpress.com/2019/09/09/projectairlockfinalwords/" target="_blank" rel="noopener noreferrer"><Button colored>Demo</Button></a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <Button style={{color: 'white'}}>
                  <i className="fa fa-share"></i>
                </Button>
              </CardMenu>
          </Card>
        </Cell>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
        {/* Fitness App Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/237/weight-lifter_1f3cb.png) center / cover'}}>Fitness Friend</CardTitle>
              <CardText>
                A fitness web app to give personalized nutrition and workout plans based on an individual’s goals, height, weight, and body fat percentage. Implemented front end with React.js, and integrated backend with Node.js and MySQL to store user data, diet plans, and workout schedules.
              </CardText>
              <div className="tools" >
              <p>React.js</p>
              <p>Node.js</p>
              <p>MySQL</p>
              <p>Python</p>
              </div>
              <CardActions border>
                <a href="https://github.com/rossmojgani/FitnessApp" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <Button style={{color: 'white'}}>
                  <i className="fa fa-share"></i>
                </Button>
              </CardMenu>
          </Card>
        </Cell>
        </Grid>


        <Grid>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
        {/* Dancing Robot */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/198/robot-face_1f916.png) center / cover'}}>Autonomous Biped Robot
             </CardTitle>
              <CardText>
              An autonomous dancing robot with manual control via a remote controller with 6 different dance moves and various feedback such as facial expressions implemented on a 7 segment display and servo motors controlling arm and leg movements.
              </CardText>
              <div className="tools" >
              <p>Python</p>
              <p>Raspberry Pi</p>
              <p>C</p>
              </div>
              <CardActions border>
                <a href="https://github.com/rossmojgani" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <Button style={{color: 'white'}}>
                  <i className="fa fa-share"></i>
                </Button>
              </CardMenu>
          </Card>
        </Cell>
        <Cell col={6} style={{padding: '20px', margin: '0 auto'}}>
           {/* BabyVision */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/198/baby_1f476.png) center / cover'}}>BabyVision
             </CardTitle>
              <CardText>
                Created a internet of things baby monitor with face detection, live 24/7 image stream, and web app interface using two Raspberry Pi devices. Used React.js, Node.js, MongoDB, and OpenCV. 
              </CardText>
              <div className="tools" >
              <p>Python</p>
              <p>Raspberry Pi</p>
              <p>React.js</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              </div>
              <CardActions border>
                <a href="https://github.com/rossmojgani" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <Button style={{color: 'white'}}>
                  <i className="fa fa-share"></i>
                </Button>
              </CardMenu>
          </Card>
        </Cell>
        </Grid>


      </div>
    
    )
  
  }

}

export default Projects

