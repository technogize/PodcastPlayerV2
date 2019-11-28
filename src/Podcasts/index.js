import React from 'react';
import PodcastItem from '../PodcastItem';

import podcastData from '../data/podcasts.json'; // Stub data

const Podcasts = () => {
  return (
    <div className="Podcasts">
      {podcastData.map(item => {
        return (
          <PodcastItem
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl || null}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Podcasts;
