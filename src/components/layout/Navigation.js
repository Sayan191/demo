import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "../layout/css/Navigation.css"

const Navigation = () =>{
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
                    </div>
                </div>
        </>
        )
}

export default Navigation