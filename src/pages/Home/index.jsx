import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { Characters } from '../../api/graphql/characters.gql';
import { AddFavourite, RemoveFavourite } from '../../api/graphql/favourite.gql';
import Card from '../../components/Card';
import Button from '../../components/Button';
import './style.scss';

function Home({ user, dispatch }) {
  const [openCard, setOpenCard] = useState(false);
  const [isShowAll, setIsShowAll] = useState(true);
  const [favouritesId, setFavouritesId] = useState({});
  const [filter, setFilter] = useState('Display Favourite');
  const [selectedCard, setSelectedCard] = useState(undefined);

  const { loading, data, fetchMore } = useQuery(Characters, {
    variables: { page: 1 },
    onCompleted() {
      user.favourites.forEach(({ id }) => {
        setFavouritesId((prevState) => ({ ...prevState, [id]: true }));
      });
    },
  });

  const [addFavourite] = useMutation(AddFavourite, {
    onCompleted(res) {
      dispatch({ type: 'UPDATE_USER', payload: { user: res.addFavourite } });
      res.addFavourite.favourites.forEach(({ id }) => {
        setFavouritesId((prevState) => ({ ...prevState, [id]: true }));
      });
    },
  });

  const [removeFavourite] = useMutation(RemoveFavourite);

  const openCardHandler = (id) => {
    const character = data.characters.results.find((c) => c.id === id);
    setOpenCard(false);
    setSelectedCard(character.id);
    return character;
  };

  const onCloseHandler = () => {
    setSelectedCard(undefined);
  };

  const prepareEpisode = (episode) => {
    const sortedEpisode = [...episode].reverse().slice(0, 3);
    return sortedEpisode.map(({ __typename, ...rest }) => ({ ...rest }));
  };

  const prepareSendingFavouriteData = ({
    __typename,
    origin,
    episode,
    ...rest
  }) => {
    const { name, dimension } = origin;
    const sortedEpisode = prepareEpisode(episode);
    return {
      ...rest,
      origin: { name, dimension },
      episode: [...sortedEpisode],
    };
  };

  const toggleFilter = () => {
    if (isShowAll) {
      setFilter('Display All');
      setIsShowAll(false);
    } else {
      setFilter('Display Favourite');
      setIsShowAll(true);
    }
  };

  const updateUser = (data) => {
    const user = data.removeFavourite;
    dispatch({ type: 'UPDATE_USER', payload: { user } });
    const updatedFavouritesId = user.favourites.reduce(
      (accum, obj) => ({ ...accum, [obj.id]: true }),
      { [user.favourites[0].id]: true },
    );
    setFavouritesId(updatedFavouritesId);
  };

  const toggleFavourite = async (id, isFavourite) => {
    const favouriteCharacter = data.characters.results.find((c) => c.id === id);
    const character = prepareSendingFavouriteData(favouriteCharacter);
    if (!isFavourite) {
      addFavourite({
        variables: { data: { ...character } },
      });
    } else {
      const { data } = await removeFavourite({
        variables: { data: { id } },
      });
      updateUser(data);
    }
  };

  const showCards = () => {
    return isShowAll ? data.characters.results : user.favourites;
  };

  const loadMore = async () => {
    const { info } = data.characters;
    if (info.next) {
      const res = await fetchMore({
        variables: {
          page: info.next,
        },
      });
      console.log(res);
      console.log(data);
    }
  };

  return (
    <div className="home-wrapper">
      <div className="d-flex favourite-btn-container">
        <Button onClick={toggleFilter}>{filter}</Button>
      </div>
      <div className="container d-flex wrap">
        {!loading &&
          showCards().map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              status={character.status}
              gender={character.gender}
              origin={character.origin.name}
              episodes={character.episode}
              dimension={character.origin.dimension}
              isFavourite={favouritesId[character.id] ?? false}
              isOpen={openCard || selectedCard === character.id}
              onClickFavourite={toggleFavourite}
              openCardHandler={openCardHandler}
              onCloseHandler={onCloseHandler}
            />
          ))}
      </div>
      <div className="load-more d-flex justify-center">
        <Button onClick={loadMore}>
          {loading ? 'Loading ...' : 'Loade More'}
        </Button>
      </div>
    </div>
  );
}

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.shape({ favourites: PropTypes.array }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Home;
