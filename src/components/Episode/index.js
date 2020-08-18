import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Modal from '../Modal';

const Episode = props => {
  const {
    className,
    imageUrl,
    episodeName,
    episodeDesc,
    podcastName,
    episodeDate,
    isPlaylist,
    onPlayClick
  } = props;

  const classes = `Episode ${className}`;

  const backgroundImage = { backgroundImage: `url(${imageUrl})` };
  const playHandler = e => {
    onPlayClick(e, props);
  };

  const infoContainerClasses = imageUrl
    ? 'Episode__info-container'
    : 'Episode__info-container Episode__info-container--no-padding';

  return (
    <div className={classes}>
      <div className="Episode__name">{episodeName}</div>
      <div className="Episode__bottom">
        {imageUrl && <div className="Episode__image" style={backgroundImage} />}
        <div className={infoContainerClasses}>
          <div className="Episode__podcast">{podcastName}</div>
          <div className="Episode__pub-date">{episodeDate}</div>
          <div className="Episode__controls">
            <Button
              className="Button--icon Button--icon-play Episode__control-button"
              onClick={playHandler}
            />
            <Modal buttonClass="Button--icon Button--icon-info Episode__control-button">
              <h3>{episodeName}</h3>
              <div>{episodeDesc}</div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

Episode.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  episodeName: PropTypes.string,
  episodeDesc: PropTypes.string,
  podcastName: PropTypes.string,
  episodeDate: PropTypes.string,
  isPlaylist: PropTypes.bool,
  onPlayClick: PropTypes.func
};

Episode.defaultProps = {
  className: null,
  imageUrl: null,
  episodeName: null,
  episodeDesc: null,
  podcastName: '-',
  episodeDate: null,
  isPlaylist: false,
  onPlayClick: () => {}
};

export default Episode;
