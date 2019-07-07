import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/NavigationBar';
import Main from './components/main';

class App extends Component {
  render() {
     return(
       <Router>
         <div>
           <Navbar />
           <Route exact path = "/" component = {Main} />
         </div>
       </Router>
     );
  }
}
  

export default App;

