import React, { Component } from "react";
import { Link} from "react-router-dom";
import "../layout/css/Navigation.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { isAuthenticated } from "../auth/authHelper";

class Navigation extends Component{
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };  
  render(){
        return(
            <>
            <hr/>
                <div className="navbar">
                    <div className="z-depth-0 nav-wrapper white">
                        <Link
                          to="#"
                          style={{
                            fontFamily: "monospace",
                            fontSize:"19px",
                            marginLeft:"19px"  
                          }}
                          className="col-sm left black-text"
                        >
                            About              
                        </Link>
                        <Link
                            to="#"
                            style={{
                              fontFamily: "monospace" ,
                              fontSize:"19px",
                              marginLeft:"25px"  
                            }}
                            className="col-sm left black-text"
                        >
                            Data-Structure              
                        </Link> 
                        <Link
                            to="#"
                            style={{
                              fontFamily: "monospace" ,
                              fontSize:"19px",
                              marginLeft:"25px"  
                            }}
                            className="col-sm left black-text"
                        >
                            Algorithm              
                        </Link> 
                        {
                          !isAuthenticated() &&
                          <Link
                              to="/login"
                              style={{
                                  width: "95px",
                                  borderRadius: "2px",
                                  letterSpacing: "1.5px",
                                  marginRight:"25px"
                                }}
                              className="col-sm right btn btn-medium btn-flat waves-effect white black-text"
                            >
                              Log In
                          </Link> 
                        }
                        {
                          isAuthenticated() && 
                          <Link
                              style={{
                                width: "95px",
                                borderRadius: "2px",
                                letterSpacing: "1.5px",
                                marginRight:"25px"
                              }}
                              onClick={this.onLogoutClick}
                              className="col-sm right btn btn-medium btn-flat waves-effect white black-text"
                          >
                              Logout
                          </Link>
                        }
                    </div>
                </div>
        </>
        )
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);