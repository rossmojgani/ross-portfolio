import React, { Component }  from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../css/Contact.css';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <ul>
              
              <li>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (123)  456-7890
                </ListItemContent>
              </li>
              
              <li>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-fax" aria-hidden="true" />
                  (123)  456-7890
                </ListItemContent>
              </li>
              
              <li>
                <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  someone@example.com
                </ListItemContent>
              </li>
        
              <li>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-skype" aria-hidden="true" />
                  My skype id
                </ListItemContent>
              </li>
            
            </ul>
            </div>
          </Cell>
        </Grid>
      </div>

)
}

}
export default Contact

