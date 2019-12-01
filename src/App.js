import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import ComponentList from './containers/ComponentList';
import Podcasts from './containers/Podcasts';
import EpisodeList from './containers/EpisodeList';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Podcasts />
        </Route>
        <Route exact path="/all-components">
          <ComponentList />
        </Route>
        <Switch>
          <Route path="/episodes/:id">
            <EpisodeList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
