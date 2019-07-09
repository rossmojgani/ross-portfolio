import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './Landingpage';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/experience" component={Experience} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
