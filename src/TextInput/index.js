import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => {
  const {
    isHidden,
    placeholder,
    inputClass,
    id,
    label,
    labelClass,
    value,
    isDisabled,
    onChange
  } = props;

  const type = isHidden ? 'hidden' : 'text';
  const inputClasses = `Input__input ${inputClass}`;
  const labelClasses = `Input__label ${labelClass}`;

  return (
    <div className="Input">
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        className={inputClasses}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  isHidden: PropTypes.bool,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

TextInput.defaultProps = {
  isHidden: false,
  placeholder: null,
  inputClass: null,
  id: null,
  label: null,
  labelClass: null,
  value: null,
  isDisabled: false,
  onChange: () => null
};

export default TextInput;
