import React, {Component} from 'react';

import './Contact.css';


const githubImage = require('../Images/github.png');
const gmailImage = require('../Images/gmail.png');

class Contact extends Component {

  componentWillMount(){
    document.body.style.background = "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)";
  }

  render() {
      return (
          <div>
            <div class="Centre-Align-Contacts">Click on the Images to contact me through that medium.</div>
            <div class="ContactFlexContainer">
              <div class="ContactFlexItem"><img src={githubImage} alt="" class="fill" height="100%" width="100%" /></div>
              <div class="ContactFlexItem"></div>
              <div class="ContactFlexItem"><img src={gmailImage} alt="" class="fill" height="100%" width="100%" /></div>
            </div>
          </div>
      )
  }
}

export default Contact;