import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import ComponentList from './ComponentList';
import Podcasts from './Podcasts';

const App = () => {
  return (
    <div className="App">
      <div >

      </div>
      <Router>
        <Route exact path="/">
          <Podcasts />
        </Route>
        <Route exact path="/all-components">
          <ComponentList />
        </Route>
      </Router>
    </div>
  );
};

export default App;
