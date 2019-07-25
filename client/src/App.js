import React, { Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/main';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
    
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
    
  render() {
     let backdrop;

     if (this.state.sideDrawerOpen) {
       backdrop = <Backdrop click={this.backdropClickHandler} />
     }

     return(
       <div style={{height: '100%'}}>
         <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
         <SideDrawer show={this.state.sideDrawerOpen} />
         {backdrop}
         <main style={{marginTop: '64px'}}/>
         <ScrollableAnchor id={'about-body'}><About /></ScrollableAnchor>
         <ScrollableAnchor id={'projects'}><Projects /></ScrollableAnchor>
         <ScrollableAnchor id={'experience'}><Experience /></ScrollableAnchor>
       </div>
     );
  }
}
  

export default App;

