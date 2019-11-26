import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ComponentList from './ComponentList';
import Title from './Title';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <header className="App-header">
            <Title text="Yeah!" />
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/all-components" className="button is-success">
              Components
            </Link>
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
