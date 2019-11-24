import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import ComponentList from "./ComponentList";
import Title from "./Title";
import Button from "./Button";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <header className="App-header">
            <Title text="Yeah!" />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Button
              isLink
              linkRoute="/all-components"
              buttonText="Components"
              buttonClass="is-success"
            />
          </header>
        </Route>
        <Route exact path="/all-components">
          <ComponentList />
        </Route>
      </Router>
    </div>
  );
};

export default App;
