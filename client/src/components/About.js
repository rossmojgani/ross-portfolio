import React, { Component }  from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
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

