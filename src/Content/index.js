import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const {
    content,
    customClass
  } = props;

  const componentClass = (customClass) ? `Content ${customClass}` : 'customClass';

  return (
    <div className={componentClass} dangerouslySetInnerHTML={{__html: content}}></div>
  )
};

Content.propTypes = {
  content: PropTypes.string,
  customClass: PropTypes.string
}

Content.defaultProps = {
  content: null,
  customClass: null
}

export default Content;