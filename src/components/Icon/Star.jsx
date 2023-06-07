import React from 'react';
import PropTypes from 'prop-types';

function Star({ fill }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ width: '40px' }}
    >
      <g>
        <path
          style={{ fill }}
          d="M253.2,448.4l-107.8,57.7l-2.5,1.1c-18.3,6.9-35.6,5.5-48.7-6.2c-12.3-11-16.8-26.8-14.2-44.9l18-124.4
       l-81.4-85.6C2.4,231.8-3.1,214.2,1.7,195.8c5.3-20.4,22.5-32.2,47.4-36.1l108.2-16.3l56.6-117.4C222.7,9.4,236.5-0.4,253.7,0
       c16.9,0.5,30.3,10.8,40.8,29.3l54.8,114.8L470.6,161c19.3,3.3,33.5,13.4,39.2,30.1c5.7,16.7,0.3,33.6-14.3,50.8l-88.1,89.9
       l19.8,124.3c3.1,21.5-0.6,38.5-15,48.7c-12.9,9.1-29.1,9.1-47.8,2.7l-3.1-1.3L253.2,448.4z"
        />
      </g>
    </svg>
  );
}

Star.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default Star;
