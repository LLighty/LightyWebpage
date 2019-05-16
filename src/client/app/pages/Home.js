import React, {Component} from 'react';

import { GetCutePicture, GetProgrammingQuote } from '../Components/Function';

import './Home.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { picture: "", quote: "", file: "img", play: "" };
  }

  componentWillMount(){
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
              hello
            </div>
            <div class="split right top">
              <h2 class ="centre">
                {this.state.quote}
              </h2>
            </div>
            <div class="split right bottom">
              <img src={this.state.picture} alt="Everyone likes fluffy pictures!" id="img"/>
              <div>
                Hello is it me you're looking for
              </div>
            </div>
          </div>
      )
  }
}

export default App;
