import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import './style.scss';

function Card({
  isOpen,
  isFavourite,
  id,
  image,
  name,
  species,
  gender,
  status,
  origin,
  dimension,
  episodes,
  onCloseHandler,
  openCardHandler,
}) {
  const [favourite, seFavourite] = useState(false);
  const creatEpisodElement = (episode) => (
    <div key={episode.id} className="episode">
      <div>{episode.name}</div>
      <div className="date">{episode.air_date}</div>
    </div>
  );

  const lastestEpisodes = () => {
    const sorted = [...episodes].reverse();
    const latest = sorted.slice(0, 3);
    return latest.map((episode) => creatEpisodElement(episode));
  };

  const toggleFavorite = () => {
    if (favourite) {
      seFavourite(false);
    } else {
      seFavourite(true);
    }
  };

  return (
    <div className="card">
      <div className="d-flex column items-center">
        <div
          className="card-image"
          style={{ background: `url(${image}) no-repeat center` }}
        />
        <div className="card-name d-flex justify-center">{name}</div>
        <div onClick={toggleFavorite} className="card-icon">
          <Icon
            fill={favourite || isFavourite ? 'yellow' : '#555555'}
            name="star"
          />
        </div>
        <div className="info w-100 pt-2">
          <div className="d-flex justify-between">
            <div>Species:</div>
            <div>{species}</div>
          </div>
          <div className="d-flex justify-between pt-2">
            <div>Gender:</div>
            <div>{gender}</div>
          </div>
          <div className="d-flex justify-between pt-2">
            <div>Origin:</div>
            <div>{origin}</div>
          </div>
          <div className="d-flex justify-between pt-2">
            <div>Dimension:</div>
            <div>{dimension}</div>
          </div>
          <div className="d-flex justify-between pt-2">
            <div>Status:</div>
            <div>{status}</div>
          </div>
        </div>
        <div className="d-flex justify-center more-btn w-100">
          <Button onClick={() => openCardHandler(id)}>more</Button>
        </div>
        {isOpen && (
          <div className="more-info w-100">
            <Button onClick={onCloseHandler}>Less</Button>
            <div className="pt-2">
              <div className="d-flex justify-between w-100">
                <div className="subject">Species:</div>
                <div className="value">{species}</div>
              </div>
              <div className="d-flex justify-between ">
                <div className="subject">Gender:</div>
                <div className="value">{gender}</div>
              </div>
              <div className="d-flex justify-between">
                <div className="subject">Origin:</div>
                <div className="value">{origin}</div>
              </div>
              <div className="d-flex justify-between">
                <div className="subject">Dimension:</div>
                <div className="value">{dimension}</div>
              </div>
              <div className="d-flex justify-between">
                <div className="subject">Status:</div>
                <div className="value">{status}</div>
              </div>
              <div className="subject">Latest episodes:</div>
              {lastestEpisodes()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isFavourite: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  episodes: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, air_date: PropTypes.string }),
  ).isRequired,
  openCardHandler: PropTypes.func.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  dimension: PropTypes.string,
};

Card.defaultProps = {
  dimension: '',
  isFavourite: false,
};

export default Card;
