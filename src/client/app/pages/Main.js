import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";

import "./Main.css";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul id="nav">
            <li>
              <Link to="/LightyWebpage/">Home</Link>
            </li>
            <li>
              <Link to="/LightyWebpage/about/">About Me</Link>
            </li>
            <li>
              <Link to="/LightyWebpage/resume/">Resume</Link>
            </li>
            <li>
                <Link to="/LightyWebpage/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/LightyWebpage/" exact   component={Home} />
        <Route path="/LightyWebpage/about/"   component={About} />
        <Route path="/LightyWebpage/resume/"  component={Resume} />
        <Route path="/LightyWebpage/contact/" component={Contact} />

      </div>
    </Router>
  );
}

export default AppRouter;