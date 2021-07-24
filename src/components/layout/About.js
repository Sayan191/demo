import React, { Component, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Codes from "./Codes";
import Developers from "./Developers";
import "../layout/css/About.css"

class Landing extends Component {
  render() {
    return (
      <>
        <div style={{ height: "40vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                  <div class="typewriter">
                    <p> AlgoForGeeks || For Developers|| By Developers</p>
                  </div>
              </div>
            </div>
        </div>
        <div style={{ height: "40vh" }} className="container valign-wrapper">
            <Codes />
        </div>
        <Developers/>
      </>
    );
  }
}
export default Landing;