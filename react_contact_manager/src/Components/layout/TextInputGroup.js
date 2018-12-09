import React from 'react';
import PropTypes from 'prop-types';


function TextInputGroup({
  label,
  name,
  value,
  placeholder,
  type,
  onchange
}) {
  return (
    <div className='formGroup'>
      <label htmlFor={name} >{label}</label>
      <input type={type}
        className="formControlFormControlLg"
        placeholder={placeholder}
        value={value}
        onChange={onChange} ></input>
    </div>
  );

};



TextInputGroup.proptypes ={
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;




