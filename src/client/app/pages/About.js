import React, {Component} from 'react';

import "./About.scss";

var styles = {
    body: {
      background: "linear-gradient(to bottom,  rgba(8,13,40,1) 0%,rgba(38,19,0,1) 100%)",
      boxShadow: "inset 0 0 400px #111111",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    }
}

class About extends Component {

  componentWillMount(){
    for(var i in styles.body){
      document.body.style[i] = styles.body[i];
    }
  }

  componentWillUnmount(){
    document.body.style.boxShadow = null;
  }

  fallingParticles(){
    let components = []
    for(var i = 0; i < 80; i++){
      components.push(<i class="rain"></i>);
    }
    return components;
  }

  render() {
      return (
          <div>
            <div>{this.fallingParticles()}</div>
            <div class="aboutMe-Box">
              <p class="aboutMe-Box-Centre aboutMe-Box-Title-Text">Liam Lightfoot</p>
              <p>I am a 4th year University Student studying Software Engineering at the ANU. </p>
            </div>
          </div>
      )
  }
}

export default About;