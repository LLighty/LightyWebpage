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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About Me</Link>
            </li>
            <li>
              <Link to="/resume/">Resume</Link>
            </li>
            <li>
                <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact   component={Home} />
        <Route path="/about/"   component={About} />
        <Route path="/resume/"  component={Resume} />
        <Route path="/contact/" component={Contact} />

      </div>
    </Router>
  );
}

export default AppRouter;