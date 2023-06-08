import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button({ children, loading, onClick, size }) {
  return (
    <button
      className={`btn-wrapper btn-wrapper-${size}`}
      type="button"
      onClick={onClick}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  size: 'medium',
};

export default Button;
