import React, {Component} from 'react';

import { GetCutePicture, GetProgrammingQuote } from '../components/Function';

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
          <div className="backgroundHome">
            <div className="centre">
              <div className="title largePrint">
                Liam Lightfoot
              </div>
              <div className="title finePrint">
                Aspiring Software Developer
              </div>
              <div className="quoteSquare quoteText">
                {this.state.quote}
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default App;
