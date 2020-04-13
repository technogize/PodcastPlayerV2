import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Modal from '../Modal';

const Episode = props => {
  const {
    imageUrl,
    episodeName,
    episodeDesc,
    podcastName,
    episodeDate,
    isPlaylist,
    isSubscribeBtn,
    isUnsubscribeBtn
  } = props;

  const backgroundImage = { backgroundImage: `url(${imageUrl})` };

  return (
    <div className="Episode">
      <div className="Episode__name">{episodeName}</div>
      <div className="Episode__bottom">
        {imageUrl && <div className="Episode__image" style={backgroundImage} />}
        <div className="Episode__info-container">
          <div className="Episode__podcast">{podcastName}</div>
          <div className="Episode__pub-date">{episodeDate}</div>
          <div className="Episode__controls">
            <Button className="Button--icon Button--icon-play Episode__control-button" />
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
  imageUrl: PropTypes.string,
  episodeName: PropTypes.string,
  episodeDesc: PropTypes.string,
  podcastName: PropTypes.string,
  episodeDate: PropTypes.string,
  isPlaylist: PropTypes.bool,
  isSubscribeBtn: PropTypes.bool,
  isUnsubscribeBtn: PropTypes.bool
};

Episode.defaultProps = {
  imageUrl: null,
  episodeName: null,
  episodeDesc: null,
  podcastName: '-',
  episodeDate: null,
  isPlaylist: false,
  isSubscribeBtn: false,
  isUnsubscribeBtn: false
};

export default Episode;