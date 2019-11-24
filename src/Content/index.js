import React from "react";
import PropTypes from "prop-types";

const Content = props => {
  const { content, className } = props;

  const componentClass = className ? `Content ${className}` : "Content";

  return (
    <div
      className={componentClass}
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

Content.defaultProps = {
  content: null,
  className: null
};

export default Content;
