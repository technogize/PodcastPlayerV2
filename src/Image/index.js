import React from "react";
import PropTypes from "prop-types";

const Image = props => {
  const { url, className, alt } = props;

  const classes = `image ${className}`;

  return (
    <figure className={classes}>
      <img src={url} alt={alt} />
    </figure>
  );
};

Image.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  url: null,
  className: null,
  alt: null
};

export default Image;
