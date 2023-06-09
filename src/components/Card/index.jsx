import React from 'react';
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
  onClickFavourite,
}) {
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
    onClickFavourite(id, isFavourite);
  };

  const rowContent = () => ({ species, gender, origin, dimension, status });

  const rowElement = (key, value, index) => (
    <div key={`${id}-${index}`} className="d-flex justify-between pt-2">
      <div>{`${key.charAt(0).toUpperCase()}${key.slice(1)}:`}</div>
      <div>{value ?? '--'}</div>
    </div>
  );

  const showContent = () => {
    const content = rowContent();
    return Object.entries(content).map(([key, value], index) =>
      rowElement(key, value, index),
    );
  };

  return (
    <div className="card d-flex column justify-between">
      <div className="card-content d-flex column items-center">
        <div
          className="card-image"
          style={{ background: `url(${image}) no-repeat center` }}
        />
        <div className="card-name d-flex justify-center">{name}</div>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          onClick={toggleFavorite}
          onKeyDown={toggleFavorite}
          className="card-icon"
        >
          <Icon fill={isFavourite ? 'yellow' : '#555555'} name="star" />
        </div>
        <div className="info w-100">{showContent()}</div>
        {isOpen && (
          <div className="more-info w-100">
            <Button className="w-100" onClick={onCloseHandler}>
              Less
            </Button>
            <div className="more-info-content">
              <div className="pt-2">
                {showContent()}
                <div className="pt-2">Latest episodes:</div>
                {lastestEpisodes()}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-center w-100">
        <Button
          className="card-button w-100"
          onClick={() => openCardHandler(id)}
        >
          more
        </Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  openCardHandler: PropTypes.func.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  dimension: PropTypes.string,
  onClickFavourite: PropTypes.func.isRequired,
  episodes: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, air_date: PropTypes.string }),
  ).isRequired,
};

Card.defaultProps = {
  dimension: '',
};

export default Card;
