import React, {Component} from 'react';

import Header from '../components/Header.js';

import './Home.css';

class App extends Component {
  render() {
      return (
          <div>
            <Header />
            <div class="split left">
              hello
            </div>
            <div class="split right top">
               HelloV2
            </div>
            <div class="split right bottom">
               HelloV3
            </div>
          </div>
      )
  }
}

export default App;
