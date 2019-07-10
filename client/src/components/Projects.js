import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
  
    if(this.state.activeTab === 0){
      return(
        <div>
        {/* Fitness App Project */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}}>Fitness Web App</CardTitle>
          <CardText>
            This was a fitness web app created with react.js, node.js and MySQL.
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
        <div>
        {/* Boggle Player */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(http://anthonybarranco.com/blog/wp-content/uploads/2014/10/oldboggle.jpg) center / cover'}}>CPU Boggle Player</CardTitle>
          <CardText>
            This was a boggle player controlled by the CPU created in Java.
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
    }else if(this.state.activeTab === 2){
      return(
        <div><h1>This is Web Portfolio</h1></div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div><h1>This is UBC Mars Colony</h1></div>
      )
    }
  
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Fitness App</Tab>
          <Tab>Boggle Player</Tab>
          <Tab>Web Portfolio</Tab>
          <Tab>UBC Mars Colony</Tab>
        </Tabs>
        
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              {this.toggleCategories()}
            </Cell>
          </Grid>
        </section>
      
      </div>
    
    )
  
  }

}

export default Projects

