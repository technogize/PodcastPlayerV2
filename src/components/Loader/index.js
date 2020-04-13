import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => {
  const { isLoading } = props;

  const classes = `Loader${isLoading ? ' Loader--active' : ''}`;

  return (
    <div className={classes}>
      <span>Loading...</span>
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool
};

Loader.defaultProps = {
  isLoading: false
};

export default Loader;
