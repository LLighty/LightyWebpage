import React, {Component} from 'react';

import './Resume.css';

var styles = {
  body: {
      background: "linear-gradient(to right, #009fff, #ec2f4b)",
      height: "100%",
      overflow: "hidden",
      position: "relative"
  }
}

class Resume extends Component {

  componentWillMount(){
    for(var i in styles.body){
      document.body.style[i] = styles.body[i];
    }
  }

  render() {
      return (
        <div>
          <div class="resume-left">
            <h1 class="centre-align-resume">Skills</h1>
            <div class="resume-content">
              <div class="resume-container">
                <div class="centre-align-text">
                  <h2>Languages</h2>
                </div>
              <li class="move-li-resume">Java</li>
              <li class="move-li-resume">C#</li>
              <li class="move-li-resume">Javascript</li>
              <li class="move-li-resume">Haskell</li>
              <li class="move-li-resume">Bash</li>
              <li class="move-li-resume">Python</li>
              </div>
              <div class="resume-container">
              <div class="centre-align-text">
                  <h2>Front-End</h2>
                </div>
              <li class="move-li-resume">HTML5</li>
              <li class="move-li-resume">CSS</li>
              <li class="move-li-resume">ReactJS</li>
              </div>
              <div class="resume-container">
              <div class="centre-align-text">
                  <h2>Back-end</h2>
                </div>
              <li class="move-li-resume">MySQL</li>
              <li class="move-li-resume">JAX-RS</li>
              <li class="move-li-resume">Gradle</li>
              <li class="move-li-resume">GIT</li>
              <li class="move-li-resume">NodeJS</li>
              </div>
              <div class="resume-container">
              <div class="centre-align-text">
                  <h2>Documentation</h2>
                </div>
              <li class="move-li-resume">Agile</li>
              <li class="move-li-resume">Risk Analysis</li>
              <li class="move-li-resume">UML</li>
              <li class="move-li-resume">Relationship Schemas</li>
              </div> 
            </div>
          </div>
          <div class="resume-right">
            <h1 class="centre-align-resume">Projects</h1>
          </div>
        </div>
      )
  }
}

export default Resume;
