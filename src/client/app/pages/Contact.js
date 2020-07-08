import React, {Component} from 'react';

import './Contact.css';


const githubImage = require('../Images/github.png');
const gmailImage = require('../Images/gmail.png');
const discordImage = require('../Images/discord-logo.jpg');

class Contact extends Component {

  componentWillMount(){
    document.body.style.background = "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)";
  }

  render() {
      return (
          <div>
            <div class="Centre-Align-Contacts">Click on the Images to contact me through that medium.</div>
            <div class="ContactFlexContainer">
              <div class="ContactFlexItem"><a href="https://github.com/LLighty"><img src={githubImage} alt="" class="fill" height="100%" width="100%" /></a></div>
              <div class="ContactFlexItem"><a href="https://discordapp.com/users/152687030290087936"><img src={discordImage} alt="" class="fill" height="100%" width="100%" /></a></div>
              <div class="ContactFlexItem"><a href="mailto:liamjameslightfoot@gmail.com"><img src={gmailImage} alt="" class="fill" height="100%" width="100%" /></a></div>
            </div> //152687030290087936
          </div>
      )
  }
}

export default Contact;