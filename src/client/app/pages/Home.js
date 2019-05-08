import React, {Component} from 'react';

import { GetCutePicture, GetProgrammingQuote } from '../Components/Function';

import './Home.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { picture: "", quote: "abcs", file: "img", play: "" };
  }

  componentWillMount(){
    var picture = GetCutePicture();
    var quote = GetProgrammingQuote();

    picture.then(result => {
      if(result !== "error" || result !== ""){
        this.setState({picture: result});
      } else {
        
      }
    })

    quote.then(quote => {
      if(quote !== "error" || quote !== ""){

      } else {
        this.setState({quote: "“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”, Bill Gates"});
      }
    })
  }

  render() {
      return (
          <div>
            <div class="split left">
              hello
            </div>
            <div class="split right top">
               {this.state.quote}
            </div>
            <div class="split right bottom">
              <img src={this.state.picture} alt="Everyone likes fluffy pictures!" height="350" width="350" />
            </div>
          </div>
      )
  }
}

export default App;
