import React, {Component} from 'react';

import './Skills.css';

var styles = {
  body: {
      background: "linear-gradient(to right, #009fff, #ec2f4b)",
      height: "100%",
      overflow: "hidden",
      position: "relative"
  }
}

class Skills extends Component {

  componentWillMount(){
    for(var i in styles.body){
      document.body.style[i] = styles.body[i];
    }
  }

  render() {
      return (
        <div>
            <div class="centre-align-resume">Skills</div>
            <div class="resume-content">
              <div class="resume-container">
                <div class="centre-align-text">
                  <h2 class="underline">Languages</h2>
                </div>
              <li class="move-li-resume">Java</li>
              <li class="move-li-resume">C#</li>
              <li class="move-li-resume">Javascript</li>
              <li class="move-li-resume">Haskell</li>
              <li class="move-li-resume">Bash</li>
              <li class="move-li-resume">Python</li>
              <li class="move-li-resume">Ada</li>
              </div>
              <div class="resume-container">
              <div class="centre-align-text">
                  <h2 class="underline">Front-End</h2>
                </div>
              <li class="move-li-resume">HTML5</li>
              <li class="move-li-resume">CSS</li>
              <li class="move-li-resume">ReactJS</li>
              </div>
              <div class="resume-container">
              <div class="centre-align-text">
                  <h2 class="underline">Back-end</h2>
                </div>
              <li class="move-li-resume">MySQL</li>
              <li class="move-li-resume">JAX-RS</li>
              <li class="move-li-resume">Gradle</li>
              <li class="move-li-resume">NodeJS</li>
              </div>
              <div class="resume-container">
              <div class="centre-align-text">
                  <h2 class="underline">Documentation</h2>
                </div>
              <li class="move-li-resume">Agile</li>
              <li class="move-li-resume">Risk Analysis</li>
              <li class="move-li-resume">UML</li>
              <li class="move-li-resume">Relationship Schemas</li>
              </div> 
            </div>
        </div>
      )
  }
}

export default Skills;
