import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button({ children, loading, onClick }) {
  return (
    <button className="btn-wrapper w-100" type="button" onClick={onClick}>
      {loading ? 'Loading...' : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
