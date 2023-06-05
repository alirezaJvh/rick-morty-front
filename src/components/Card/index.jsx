import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Card({ image, name, species, gender, status, origin, dimension }) {
  return (
    <div className="card">
      <div className="d-flex column items-center">
        <div
          className="card-image"
          style={{ background: `url(${image}) no-repeat center` }}
        />
        <div className="name d-flex justify-center">{name}</div>
        <div className="info w-100 pt-2">
          <div className="d-flex justify-between w-100">
            <div className="px-1">Species:</div>
            <div className="px-1">{species}</div>
          </div>
          <div className="d-flex justify-between w-100 pt-2 item">
            <div className="px-1">Gender:</div>
            <div className="px-1">{gender}</div>
          </div>
          <div className="d-flex justify-between w-100 pt-2 item">
            <div className="px-1">Origin:</div>
            <div className="px-1">{origin}</div>
          </div>
          <div className="d-flex justify-between w-100 pt-2 item">
            <div className="px-1">Dimension:</div>
            <div className="px-1">{dimension}</div>
          </div>
          <div className="d-flex justify-between w-100 pt-2 item">
            <div className="px-1">Status:</div>
            <div className="px-1">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  dimension: PropTypes.string,
};

Card.defaultProps = {
  dimension: '',
};

export default Card;
