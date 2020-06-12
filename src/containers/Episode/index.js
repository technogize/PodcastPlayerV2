import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import setNowPlaying from '../../actions/action_set-now-playing';
import Episode from '../../components/Episode';

const EpisodeContainer = props => {
  const { episodeData } = props;
  const dispatcher = useDispatch();

  const playHandler = () => {
    dispatcher(setNowPlaying(episodeData));
  };

  return (
    <Episode
      episodeName={episodeData.title}
      imageUrl={episodeData.thumbnail}
      episodeDesc={episodeData.description}
      episodeDate={episodeData.pubDate}
      podcastName={episodeData.podcastTitle}
      mp3url={episodeData.enclosure.link}
      onPlayClick={playHandler}
    />
  );
};

EpisodeContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  episodeData: PropTypes.object
};

EpisodeContainer.defaultProps = {
  episodeData: {}
};

export default EpisodeContainer;
