import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import setNowPlaying from '../../stores/actions/action_set-now-playing';
import Episode from '../../components/Episode';

const EpisodeContainer = props => {
  const { episodeData } = props;
  const dispatcher = useDispatch();

  const nowPlayingData = useSelector(state => state.nowPlaying);

  const playHandler = () => {
    dispatcher(setNowPlaying(episodeData));
  };

  const activeClass =
    nowPlayingData.guid === episodeData.guid ? 'Episode__now-playing' : '';

  return (
    <Episode
      className={activeClass}
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
