import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import marsColony from '../images/airlock.png';
import babyVision from '../images/baby_vision.png';
import '../css/Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
  
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid" >
        {/* Personal Portfolio */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://coreybradshaw.files.wordpress.com/2019/04/network-transformation-optimizednfv-16x9.jpg.rendition.intel_.web_.480.270.jpg) center / cover'}}>Ross Portfolio</CardTitle>
          <CardText>
            Development portfolio created in React.js to showcase projects, skills, and experience with goal in mind to connect with others sharing the same interests. 
          </CardText>
          <CardActions border>
            <a href="https://github.com/rossmojgani/ross-portfolio" target="_blant"><Button colored>Github</Button></a>
            <Button colored>Code</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
        </Card>
        
        {/* Boggle Player */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.filestackcontent.com/GliZS1I9QHKlu0FPNocW) center / cover'}}>CPU Boggle Player</CardTitle>
          <CardText>
            Applied graph theory concepts to find all solutions to any dimension Boggle board using graph traversals such a depth first search and breadth first search.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Code</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
        </Card>
        </div>
      )
    }else if(this.state.activeTab === 1){
      return(
    <div className="projects-grid">
    {/* UBC Mars Colony Airlock Project */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
        <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://ubcmarscolony.files.wordpress.com/2018/04/untitled-drawing-e1522640716340.png?w=748) center / cover'}}>UBC Mars Colony Airlock Project</CardTitle>
          <CardText>
            Vital airlock software to control fully functional airlock developed in python and C. Implemented on hardware such as Arduino and Raspberry Pi Microcontrollers.
          </CardText>
          <CardActions border>
            <a href="https://github.com/UBCMarsColony/airlock-masters" target="_blank"><Button colored>Github</Button></a>
            <Button colored>Code</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
      </Card>
    </div>
  )
}else if(this.state.activeTab === 2){
  return(
    <div className="projects-grid">
    {/* Fitness App Project */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}}>Fitness Friend</CardTitle>
          <CardText>
            A fitness web app to give personalized nutrition and workout plans based on an individual’s goals, height, weight, and body fat percentage. Implemented front end with React.js, and integrated backend with Node.js and MySQL to store user data, diet plans, and workout schedules.
          </CardText>
          <CardActions border>
            <a href="https://github.com/rossmojgani/FitnessApp" target="_blank"><Button colored>Github</Button></a>
            <Button colored>Code</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
      </Card>
    </div>
  )
}else if(this.state.activeTab === 3){
   return(
    <div className="projects-grid">
    {/* Dancing Robot CPEN 291 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
        <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/198/robot-face_1f916.png) center / cover'}}>Autonomous Dancing Robot
         </CardTitle>
          <CardText>
            Vital airlock software to control fully functional airlock developed in python and C. Implemented on hardware such as Arduino and Raspberry Pi Microcontrollers.
          </CardText>
          <CardActions border>
            <a href="https://github.com/rossmojgani" target="_blank"><Button colored>Github</Button></a>
            <Button colored>Code</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
      </Card>
    
       {/* Baby Monitor CPEN 291 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
        <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/198/baby_1f476.png) center / cover'}}>BabyVision
         </CardTitle>
          <CardText>
            Created a internet of things baby monitor with face detection, live 24/7 image stream, and web app interface using two Raspberry Pi devices. Used React.js, Node.js, MongoDB, and OpenCV. 
          </CardText>
          <CardActions border>
            <a href="https://github.com/rossmojgani" target="_blank"><Button colored>Github</Button></a>
            <Button colored>Code</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
      </Card>
    </div>
      )
    }
  
  }


  render() {
    return(
      <div className="category-tabs" id={'projects'}>
        <h1>Projects</h1>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Software Projects</Tab>
          <Tab>Design Team Projects</Tab>
          <Tab>Hackathon Projects</Tab>
          <Tab>Course Projects</Tab>
        </Tabs>
        
        <Grid>
          <Cell col={12}>
            {this.toggleCategories()}
          </Cell>
        </Grid>
      
      </div>
    
    )
  
  }

}

export default Projects


