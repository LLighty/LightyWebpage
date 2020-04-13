import React, {Component} from 'react';

import { GetCutePicture, GetProgrammingQuote } from '../Components/Function';

import './Home.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { picture: "", quote: "", file: "img", play: "" };
  }

  componentWillMount(){
    document.body.style.background = "white";
    this.setState({quote: GetProgrammingQuote()});

    var picture = GetCutePicture();

    picture.then(result => {
      if(result !== "error" || result !== ""){
        this.setState({picture: result});
      } else {
        this.setState({picture: "Error loading image"}); //TODO replace error string with static fluffy image
      }
    })
  }

  render() {
      return (
          <div>
            <div class="split left">
            <div class="texthp">
                <h1 class="titleIndent" align="center">Hello and welcome to my website!</h1>
                <h3> TODO: Introduction.
                </h3>
                <h3>The two panels on the right depict the neccessities of life:
                  <li class="texthp">Finding witty programming quotes and</li> 
                  <li class="texthp">Sharing photos of everything fluffy!</li>
                </h3>
                <h3>This page was made with React and hosted on Github Pages.</h3>
              </div>
            </div>
            <div class="split right top">
              <h2 class ="centre">
                {this.state.quote}
              </h2>
            </div>
            <div class="split right bottom">
              <div class ="middleWidth">
                <img src={this.state.picture} alt="Everyone likes fluffy pictures!" id="img"/>
                <div>
                  Cute fluffy animals!
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default App;
