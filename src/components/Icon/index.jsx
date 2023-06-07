import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const Component = {
  star: Star,
};

function Icon({ name, className, fill }) {
  if (typeof Component[name] !== 'undefined') {
    return React.createElement(Component[name], {
      className,
      fill,
    });
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  fill: '#555555',
};

export default Icon;
