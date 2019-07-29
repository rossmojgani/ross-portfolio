import React, { Component }  from 'react';
import { Grid, Cell } from 'react-mdl';
import '../css/About.css';
import { Link, animateScroll as scroll } from "react-scroll";

class About extends Component {
  render() {
    return(
      <div className="about-body" id={'about'}>
        <Grid className="about-grid">
          <Cell col={12}>
          <h2>Ross Mojgani</h2>
          <img 
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{height: '250px'}}
          />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique leo sem, in sollicitudin ipsum iaculis blandit. Fusce faucibus porta eros, a finibus elit iaculis in. Maecenas tempor fermentum orci ac rhoncus. Maecenas volutpat dolor ac consequat faucibus. Phasellus non mauris suscipit lorem hendrerit consequat vitae non nibh.</p>
          </Cell>
        </Grid>
        </div>
   )
 }
}
export default About

