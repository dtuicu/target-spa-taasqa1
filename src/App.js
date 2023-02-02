import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import About from "./pages/about/About";
import Users from "./pages/users/Users";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <HashRouter>
      <div id="spa">
        <nav id="navigation">
          <ul id="list">
            <li id="home-link">
              <Link to="/">Home</Link>
            </li>
            <li id="about-link">
              <Link to="/about">About</Link>
            </li>
            <li id="users-link">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about?param1=one&param2=two">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
