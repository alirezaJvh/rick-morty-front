import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function TextField({ value, placeholder, onChange }) {
  return (
    <div className="input-wrapper">
      <input
        className="w-100"
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  );
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
