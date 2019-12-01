import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonText, className, onClick } = props;

  const btnClass = `Button ${className}`;

  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  buttonText: null,
  className: null,
  onClick: () => null
};

export default Button;
