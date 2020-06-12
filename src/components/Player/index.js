import React from 'react';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';

const Player = props => {
  const { url } = props;

  return (
    <div className="Player">
      <ReactPlayer
        url={url}
        controls
        file="forceAudio"
        width="100%"
        height="100%"
      />
    </div>
  );
};

Player.propTypes = {
  url: PropTypes.string
};

Player.defaultProps = {
  url: null
};

export default Player;
