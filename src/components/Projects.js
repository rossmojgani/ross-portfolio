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
          <div className="tools" >
          <p>ReactJS</p>
          <p>HTML5</p>
          <p>CSS3</p>
          </div>
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
          <div className="tools" >
          <p>Java</p>
          <p>JUnit</p>
          <p>IntelliJ IDE</p>
          </div>
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

        {/* UBC Mars Colony Airlock Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://ubcmarscolony.files.wordpress.com/2018/04/untitled-drawing-e1522640716340.png?w=748) center / cover'}}>UBC Mars Colony Airlock Project</CardTitle>
              <CardText>
                Vital airlock software to control fully functional airlock developed in python and C. Implemented on hardware such as Arduino and Raspberry Pi Microcontrollers.
              </CardText>
              <div className="tools" >
              <p>Python</p>
              <p>C</p>
              <p>Arduino</p>
              <p>Raspberry Pi</p>
              </div>
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

        {/* Fitness App Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}}>Fitness Friend</CardTitle>
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

        {/* Dancing Robot CPEN 291 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/198/robot-face_1f916.png) center / cover'}}>Autonomous Dancing Robot
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
              <div className="tools" >
              <p>Python</p>
              <p>Raspberry Pi</p>
              <p>React.js</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              </div>
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

    }else if(this.state.activeTab === 1){
      return(
    <div className="projects-grid">
    {/* UBC Mars Colony Airlock Project */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
        <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://ubcmarscolony.files.wordpress.com/2018/04/untitled-drawing-e1522640716340.png?w=748) center / cover'}}>UBC Mars Colony Airlock Project</CardTitle>
          <CardText>
            Vital airlock software to control fully functional airlock developed in python and C. Implemented on hardware such as Arduino and Raspberry Pi Microcontrollers.
          </CardText>
          <div className="tools" >
          <p>Python</p>
          <p>C</p>
          <p>Arduino</p>
          <p>Raspberry Pi</p>
          </div>
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
          <div className="tools" >
          <p>React.js</p>
          <p>Node.js</p>
          <p>MySQL</p>
          <p>Python</p>
          </div>
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
          An autonomous dancing robot with manual control via a remote controller with 6 different dance moves and various feedback such as facial expressions implemented on a 7 segment display and servo motors controlling arm and leg movements.
          </CardText>
          <div className="tools" >
          <p>Python</p>
          <p>Raspberry Pi</p>
          <p>C</p>
          </div>
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
          <div className="tools" >
          <p>Python</p>
          <p>Raspberry Pi</p>
          <p>React.js</p>
          <p>Node.js</p>
          <p>MongoDB</p>
          </div>
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

        {/*//<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          //<Tab>Software</Tab>
          //<Tab>Design</Tab>
          //<Tab>Hackathon</Tab>
          //<Tab>Courses</Tab>
        //</Tabs>*/}
        {/*{this.toggleCategories()}*/}

        <Grid>
        <Cell col={6}>
        {/* Personal Portfolio */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
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
            <a href="https://github.com/rossmojgani/ross-portfolio" target="_blank"><Button colored>Github</Button></a>
            <Button colored>Code</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <Button style={{color: 'white'}}>
              <i className="fa fa-share"></i>
            </Button>
          </CardMenu>
        </Card>
        </Cell>
        
        <Cell col={6}>
        {/* Boggle Player */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
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
        </Cell>
        </Grid>

        <Grid>
        <Cell col={6}>
        {/* UBC Mars Colony Airlock Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/samsung/46/rocket_1f680.png) center / cover'}}>UBC Mars Colony Airlock Project</CardTitle>
              <CardText>
                Vital airlock software to control fully functional airlock developed in python and C. Implemented on hardware such as Arduino and Raspberry Pi Microcontrollers.
              </CardText>
              <div className="tools" >
              <p>Python</p>
              <p>C</p>
              <p>Arduino</p>
              <p>Raspberry Pi</p>
              </div>
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
        </Cell>

        <Cell col={6}>
        {/* Fitness App Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
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
        </Cell>
        </Grid>

        <Grid>
        <Cell col={6}>
        {/* Dancing Robot CPEN 291 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/198/robot-face_1f916.png) center / cover'}}>Autonomous Dancing Robot
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
        </Cell>
        
        <Cell col={6}>
           {/* Baby Monitor CPEN 291 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/198/baby_1f476.png) center / cover'}}>BabyVision
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
        </Cell>
        </Grid>

      </div>
    
    )
  
  }

}

export default Projects


