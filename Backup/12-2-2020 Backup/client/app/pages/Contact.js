import React, {Component} from 'react';

import './Contact.css';

class Contact extends Component {

  componentWillMount(){
    document.body.style.background = "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)";
  }

  render() {
      return (
          <div>
            <ul class="ContactFlexContainer">
              <li class="ContactFlexItem"><img src="../Images/github.png" alt=""></img></li>
              <li class="ContactFlexItem"><img src="../Images/Programming_Background.png" alt=""></img></li>
            </ul>
          </div>
      )
  }
}

export default Contact;
