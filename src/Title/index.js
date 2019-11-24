import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  const { tag: Tag, text, classname } = props;

  return <Tag className={classname}>{text}</Tag>;
};

Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  classname: PropTypes.string
};

Title.defaultProps = {
  tag: "h1",
  text: null,
  classname: null
};

export default Title;
