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
                              fontFamily: "monospace"  ,
                              fontSize:"19px",
                              marginRight:"15px"  
                            }}
                            className=" brand-logo right black-text"
                        >
                         Login        
                        </Link>
                    </div>
                </div>
        </>
        )
}

export default Navigation