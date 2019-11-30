import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link } from 'react-router-dom';
import getPodcastEpisodes from '../utils/rss';
import { INIT_NO_OF_EPISODES_TO_SHOW } from '../utils/constants';

import Button from '../Button';

import podcastData from '../data/podcasts.json'; // Stub dat

const EpisodeList = () => {
  const { id } = useParams();

  const [episodes, setEpisodes] = useState([]);
  const [visibleEpisodes, setVisibleEpisodes] = useState([]);

  useEffect(() => {
    const feed = podcastData.filter(podcast => podcast.id === parseInt(id, 10));

    getPodcastEpisodes(feed[0].url, eps => {
      setEpisodes(eps);
      setVisibleEpisodes(eps.slice(0, INIT_NO_OF_EPISODES_TO_SHOW));
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
      <Link to="/">Go back</Link>
      {visibleEpisodes.map((episode, i) => {
        return (
          <p key={episode.guid}>
            {i + 1} - {episode.title}
          </p>
        );
      })}
      <Button onClick={loadMoreEpisodes} buttonText="Load more epsiodes..." />
    </div>
  );
};

export default EpisodeList;
