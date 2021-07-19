import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link,Redirect } from "react-router-dom";
class Navbar extends Component {

  render() {
    return ( 
      <MuiThemeProvider>
        <div className="navbar">
          <nav className="z-depth-0 nav-wrapper white">
              <Link
                to="/"
                style={{
                  fontFamily: "monospace"  
                }}
                className="col s5 brand-logo center black-text display-3"
                style={{
                  fontFamily: "monospace",
                  fontSize:"30px",  
                }}
              >
                <i className="material-icons">code</i>
                AlgoForGeeks              
              </Link>   
          </nav>
        </div>   
      </MuiThemeProvider>
    );
  }
}
export default Navbar;



