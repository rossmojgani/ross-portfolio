import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './avatar.jpg';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

class landingpage extends Component {
  state = {typing: true}

  done = () => {
    this.setState({ typing : false }, () => {
      this.setState({ typing: true })
    });
  }
    
  render() {
    const {children} = this.props;
    return(
    <div id={'home'} style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
        {/*<img 
           style={{maxWidth: '275px'}}
           src={avatar}
           alt={"avatar"}
           className="avatar-img"
         />*/}
         
         <div className="banner-text">
           <h1>Ross Mojgani</h1>
           
           <h1>
           {this.state.typing ? <Typist onTypingDone={this.done}>
                 Computer Engineering Student.
             <Typist.Backspace count={29} delay={2500} />
                 Software Engineer Intern.
             <Typist.Backspace count={25} delay={2500} />
                 Embedded Software Developer.
             <Typist.Backspace count={28} delay={2500} />
           </Typist> : <h1><Typist onTypingDone={this.done}>Test</Typist></h1> 
           }
           </h1>

           <hr />
           <p>Python | Java | C++ | C | Web Development </p>
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
           <a href="mailto:rmojgani99@gmail.com" >
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
