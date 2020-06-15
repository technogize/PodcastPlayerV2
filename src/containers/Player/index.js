import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../../components/Player';

const PlayerContainer = () => {
  const currentTrackData = useSelector(state => state.nowPlaying);
  const isStartPlaying = !!currentTrackData;

  return (
    <>
      {Object.keys(currentTrackData).length !== 0 &&
        currentTrackData.constructor === Object && (
          <Player
            playing={isStartPlaying}
            url={currentTrackData.enclosure.link}
            title={currentTrackData.title}
            podcastTitle={currentTrackData.podcastTitle}
          />
        )}
    </>
  );
};

export default PlayerContainer;
