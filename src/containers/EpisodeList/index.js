import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Button from '../../components/Button';
import EpisodeContainer from '../Episode';
import Loader from '../../components/Loader';
import getPodcastEpisodes from '../../utils/rss';
import { INIT_NO_OF_EPISODES_TO_SHOW } from '../../utils/constants';

import podcastData from '../../data/podcasts.json'; // Stub data

const EpisodeList = () => {
  
  const { id } = useParams();

  const [episodes, setEpisodes] = useState([]);
  const [feedDetails, setFeedDetails] = useState({});
  const [visibleEpisodes, setVisibleEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(id);

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

  return (
    <div className="EpisodeList">
      {visibleEpisodes.map(episode => {
        const epData = episode;
        epData.podcastTitle = feedDetails.title;

        return (
          <React.Fragment key={episode.guid}>
            <EpisodeContainer episodeData={episode} />
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

export default EpisodeList;
