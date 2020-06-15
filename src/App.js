import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import ComponentList from './containers/ComponentList';
import Podcasts from './containers/Podcasts';
import EpisodeList from './containers/EpisodeList';
import PlayerContainer from './containers/Player';

const App = () => {
  const currentTrackData = useSelector(state => state.nowPlaying);
  const styleClass =
    currentTrackData !== {} ? 'App App--player-visible' : 'App';

  return (
    <div className={styleClass}>
      <Router>
        <Header />
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

      <PlayerContainer />
    </div>
  );
};

export default App;
