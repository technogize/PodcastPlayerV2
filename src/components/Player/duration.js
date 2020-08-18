import React from 'react';
import PropTypes from 'prop-types';

const Duration = props => {
  const { className, seconds } = props;

  const pad = string => {
    return `0${string}`.slice(-2);
  };

  const format = secondsData => {
    const date = new Date(secondsData * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds)}
    </time>
  );
};

Duration.propTypes = {
  className: PropTypes.string,
  seconds: PropTypes.number
};

Duration.defaultProps = {
  className: null,
  seconds: null
};

export default Duration;
