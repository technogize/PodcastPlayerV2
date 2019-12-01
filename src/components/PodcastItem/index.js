import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PodcastItem = props => {
  const { imageUrl, name, id } = props;
  const route = `/episodes/${id}`;
  const podcastImageStyle = { backgroundImage: `url(${imageUrl})` };

  return (
    <div className="PodcastItem">
      <Link to={route}>
        {imageUrl && (
          <div
            className="PodcastItem__image"
            aria-label={name}
            style={podcastImageStyle}
          />
        )}

        {!imageUrl && (
          <div className="PodcastItem__text-wrapper">
            {!imageUrl && <div className="PodcastItem__text">{name}</div>}
          </div>
        )}
      </Link>
    </div>
  );
};

PodcastItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number
};

PodcastItem.defaultProps = {
  imageUrl: null,
  name: null,
  id: null
};

export default PodcastItem;
