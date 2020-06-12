import React from 'react';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';

const Player = props => {
  const { url } = props;

  return <ReactPlayer url={url} controls file="forceAudio" />;
};

Player.propTypes = {
  url: PropTypes.string
};

Player.defaultProps = {
  url: null
};

export default Player;
