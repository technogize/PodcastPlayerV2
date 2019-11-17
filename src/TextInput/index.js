import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    const {
      isHidden,
      placeholder,
      inputCustomClass,
      name,
      id,
      label,
      labelCustomClass
    } = props;

    const type = (isHidden) ? 'hidden' : 'text';

    return (
      <>
        {label && <label className={labelCustomClass}>{label}</label>}
        <input id={id} type={type} name={name} placeholder={placeholder} className={inputCustomClass} />
      </>
    )
};

TextInput.propTypes = {
  isHidden: PropTypes.bool,
  placeholder: PropTypes.string,
  inputCustomClass: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelCustomClass: PropTypes.string
}

TextInput.defaultProps = {
  isHidden: false,
  placeholder: null,
  inputCustomClass: null,
  name: null,
  id: null,
  label: null,
  labelCustomClass: null
}

export default TextInput;