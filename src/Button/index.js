import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link } from 'react-router-dom';

const Button = (props) => {
  const {
    isLink,
    buttonText,
    buttonClass,
    linkRoute,
    clickHandler
  } = props;

  let button;
  let btnClass = `button ${buttonClass}`;

  if(isLink) {
    button = <Link className={btnClass} to={linkRoute}>{buttonText}</Link>
  } else {
    button = <button className={btnClass} onClick={clickHandler}>{buttonText}</button>
  }

  return (
    <>{button}</>
  )
};

Button.propTypes = {
  isLink: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  linkRoute: PropTypes.string
}

Button.defaultProps = {
  isLink: false,
  buttonText: null,
  buttonClass: null,
  linkRoute: null
}

export default Button;