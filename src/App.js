import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ComponentList from './containers/ComponentList';
import Podcasts from './containers/Podcasts';
import EpisodeList from './containers/EpisodeList';
import PlayerContainer from './containers/Player';

const App = () => {
  const currentTrackData = useSelector(state => state.nowPlaying);
  const styleClass =
    currentTrackData !== false ? 'App App--player-visible' : 'App';

  return (
    <div className={styleClass}>
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

      <PlayerContainer />
    </div>
  );
};

export default App;
