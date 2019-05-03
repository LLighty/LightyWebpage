import React, {Component} from 'react';

import './Header.css';

class Header extends Component {
    render(){
        return(
            <div>
                <ul id="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;