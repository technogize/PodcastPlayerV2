import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => {
  const { isLoading, additionalClasses, position } = props;

  const classes = `Loader${isLoading ? ' Loader--active' : ''}${
    position === 'absolute' ? ' Loader--absolute' : ''
  } ${additionalClasses || ''}`;

  return (
    <div className={classes}>
      <div className="Loader__swirly" />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
  additionalClasses: PropTypes.string,
  position: PropTypes.string
};

Loader.defaultProps = {
  isLoading: false,
  additionalClasses: null,
  position: null
};

export default Loader;
