import React, { Component }  from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../css/Footer.css';

class Footer extends Component {
    render() {
      return(
          <nav className="footer__navigation">
            <div className="footer_navigation-items">
              <ul>
                  <li>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-linkedin" aria-hidden="true" />
                      <p>linkedin/in/rossmojgani</p>
                    </ListItemContent>
                  </li>
                  
                  <li>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-github" aria-hidden="true" />
                      <p>github.com/rossmojgani</p>
                    </ListItemContent>
                  </li>
                  
                  <li>
                    <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <p>rmojgani99@gmail.com</p>
                    </ListItemContent>
                  </li>
            
          {/*<li>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true" />
                      <p>My skype id</p>
                    </ListItemContent>
                  </li>*/}
              </ul>
            </div>
          </nav>
      );
    }
}

export default Footer
