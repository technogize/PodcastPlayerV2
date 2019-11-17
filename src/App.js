import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ComponentList from './ComponentList'
import Title from './Title'

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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </header>
        </Route>
        <Route exact path="/all-components">
          <ComponentList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
