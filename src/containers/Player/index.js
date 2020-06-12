import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../../components/Player';

const PlayerContainer = () => {
  const currentTrackData = useSelector(state => state.nowPlaying);
  console.log('Player:: ', currentTrackData);
  return (
    <>{currentTrackData && <Player url={currentTrackData.enclosure.link} />}</>
  );
};

export default PlayerContainer;
