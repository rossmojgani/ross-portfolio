import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './avatar.jpg';

class landingpage extends Component {
  render() {
   return(
    <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
         <img 
           src={avatar}
           alt={"avatar"}
           className="avatar-img"
         />
         
         <div className="banner-text">
           <h1>Computer Engineering Student</h1>
           <hr />
           <p>Python | C++ | C | Java | Web Development </p>
          
         <div className="social-links">
           {/* github link */}
           <a href="https://github.com/rossmojgani" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-github-square" aria-hidden="true" />
           </a>
           
           {/* linkedin link */}
           <a href="https://www.linkedin.com/in/rossmojgani/" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-linkedin-square" aria-hidden="true" />
           </a>
           
           {/* resume link */}
           <a href="/contact" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-address-card" aria-hidden="true" />
           </a>
           
          </div>
         
         </div>
        </Cell>
      </Grid>
    </div>
    )
  }
}

export default landingpage
