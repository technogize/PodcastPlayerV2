import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    const {
        tag: Tag,
        text,
        customClass
    } = props;

    return (
        <Tag className={customClass}>{text}</Tag>
    )
};

Title.propTypes = {
    tag: PropTypes.string,
    text: PropTypes.string,
    customClass: PropTypes.string
}

Title.defaultProps = {
    tag: 'h1',
    text: null,
    customClass: null
}

export default Title;