import React, { Component} from 'react';
import logo from './Logo.png';

class Defaultpage extends Component {

  render(){
    return (
      <div>
      <div class="row">
        <div class="column">
          <img src={logo} width="200" height="100" />
        <div class="column">
          <h1>Ross Portfolio</h1>
        </div>
      </div>
      </div>
      </div>
    )
  }

}

export default Defaultpage;
