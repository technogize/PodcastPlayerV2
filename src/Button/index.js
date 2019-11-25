import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonText, className, clickHandler } = props;

  const btnClass = `button ${className}`;

  return (
    <button type="button" className={btnClass} onClick={clickHandler}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  clickHandler: PropTypes.func
};

Button.defaultProps = {
  buttonText: null,
  className: null,
  clickHandler: () => null
};

export default Button;
