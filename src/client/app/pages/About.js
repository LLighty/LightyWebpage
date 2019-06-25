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
            <div class="aboutMe centre-alignment-about">
              <h1>Liam Lightfoot</h1>
              <div class="text-about">
                <p>I am a third year Software Engineering student at the Australian National University (ANU)</p>
                <p></p>
              </div>
              </div>
          </div>
      )
  }
}

export default About;