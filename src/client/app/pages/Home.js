import React, {Component} from 'react';

import { GetCutePicture, GetProgrammingQuote } from '../Components/Function';

import './Home.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { picture: "", quote: "", file: "img", play: "" };
  }

  componentWillMount(){
    document.body.style.background = "yellow";
    this.setState({quote: GetProgrammingQuote()});

    var picture = GetCutePicture();

    picture.then(result => {
      if(result !== "error" || result !== ""){
        this.setState({picture: result});
      } else {
        
      }
    })
  }

  render() {
      return (
          <div>
            <div class="split left">
            <div class="texthp">
                <h1 class="titleIndent" align="center">Hello and welcome to my website!</h1>
                <h3>It is great of you to come and have a look. If you look to the top of the page you will find the navigation bar! This navigation bar 
                  is a wonderous thing and will take you to the important aspects of the site. 
                </h3>
                <h3>The two panels on the right depict the neccessities of life:
                  <li class="texthp">finding witty programming quotes and</li> 
                  <li class="texthp">sharing photos of everything fluffy!</li>
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
                  Everybody likes cute fluffy animals!
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default App;
