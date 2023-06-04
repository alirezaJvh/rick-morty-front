import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button({ children, onClick }) {
  return (
    <button type="button" className={['btn-wrapper']} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
