import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link } from 'react-router-dom';
import Button from '../../components/Button';
import Episode from '../../components/Episode';
import Loader from '../../components/Loader';
import getPodcastEpisodes from '../../utils/rss';
import setNowPlaying from '../../actions/action_set-now-playing';
import { INIT_NO_OF_EPISODES_TO_SHOW } from '../../utils/constants';

import podcastData from '../../data/podcasts.json'; // Stub data

const EpisodeList = () => {
  const { id } = useParams();

  const [episodes, setEpisodes] = useState([]);
  const [feedDetails, setFeedDetails] = useState({});
  const [visibleEpisodes, setVisibleEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const feed = podcastData.filter(podcast => podcast.id === parseInt(id, 10));

    getPodcastEpisodes(feed[0].url, data => {
      setIsLoading(false);
      setFeedDetails(data.feed);
      setEpisodes(data.items);
      setVisibleEpisodes(data.items.slice(0, INIT_NO_OF_EPISODES_TO_SHOW));
    });
  }, [id]);

  const loadMoreEpisodes = () => {
    const currentNoOfEps = visibleEpisodes.length;
    const nextSetOfEpisodes = episodes.slice(
      currentNoOfEps,
      currentNoOfEps + INIT_NO_OF_EPISODES_TO_SHOW
    );
    const completeNewListOfEpisodes = visibleEpisodes.concat(nextSetOfEpisodes);
    setVisibleEpisodes(completeNewListOfEpisodes);
  };

  const playHandler = (ev, episodeData) => {
    console.log(episodeData);
    setNowPlaying(episodeData);
  };

  return (
    <div className="EpisodeList">
      <Link to="/">Go back</Link>
      {visibleEpisodes.map(episode => {
        return (
          <React.Fragment key={episode.guid}>
            <Episode
              episodeName={episode.title}
              imageUrl={episode.thumbnail}
              episodeDesc={episode.description}
              episodeDate={episode.pubDate}
              podcastName={feedDetails.title}
              guid={episode.guid}
              mp3url={episode.enclosure.link}
              onPlayClick={playHandler}
            />
            <hr />
          </React.Fragment>
        );
      })}
      <div className="EpisodeList__load-more">
        <Button
          className="EpisodeList__load-more-button Button--primary"
          onClick={loadMoreEpisodes}
          buttonText="Load more epsiodes..."
        />
      </div>

      <Loader isLoading={isLoading} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setNowPlaying
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(EpisodeList);
