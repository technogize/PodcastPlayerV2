import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';
import Button from '../Button';
import Duration from './duration';
import Loader from '../Loader';

const Player = props => {
  const { url, playing, title, podcastTitle } = props;
  const [isPlaying, setIsPlaying] = useState(playing);
  const [isSeeking, setIsSeeking] = useState(false);
  const [durationTime, setDurationTime] = useState(0);
  const [playedTime, setPlayedTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const playerElem = useRef(null);

  const handleProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!isSeeking) {
      setPlayedTime(state.played);
    }
  };

  const handleDuration = duration => {
    console.log('onDuration', duration);
    setDurationTime(duration);
  };

  const handleSeekMouseDown = () => {
    setIsSeeking(true);
  };

  const handleSeekChange = event => {
    setPlayedTime(parseFloat(event.target.value));
  };

  const handleSeekMouseUp = event => {
    setIsSeeking(false);
    playerElem.current.seekTo(parseFloat(event.target.value));
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="Player">
      <div className="Player__title">
        <h3 className="Player__title-podcast">{podcastTitle}</h3>
        <h2 className="Player__title-track">{title}</h2>
        <Loader isLoading={isLoading} position="absolute" />
      </div>
      <input
        type="range"
        className="Player__seekbar"
        min={0}
        max={0.999999}
        step="any"
        value={playedTime}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
        onTouchStart={handleSeekMouseDown}
        onTouchEnd={handleSeekMouseUp}
      />
      <div className="Player__controls">
        <Duration seconds={durationTime * playedTime} />
        <Button
          className={`Button--icon Player__controls-play-pause ${
            isPlaying ? 'Button--icon-pause' : 'Button--icon-play'
          }`}
          onClick={handlePlayPause}
        />
      </div>
      <ReactPlayer
        url={url}
        ref={playerElem}
        id="podcastPlayer"
        className="Player__react-player"
        controls
        file="forceAudio"
        width="100%"
        height="100%"
        playing={isPlaying}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onBuffer={() => setIsLoading(true)}
        onBufferEnd={() => setIsLoading(false)}
      />
    </div>
  );
};

Player.propTypes = {
  url: PropTypes.string,
  playing: PropTypes.bool,
  title: PropTypes.string,
  podcastTitle: PropTypes.string
};

Player.defaultProps = {
  url: null,
  playing: false,
  title: null,
  podcastTitle: null
};

export default Player;
