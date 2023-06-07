import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Characters } from '../../api/graphql/characters.gql';
import Card from '../../components/Card';
import './style.scss';

function Home() {
  const [openCard, setOpenCard] = useState(false);

  const [selectedCard, setSelectedCard] = useState(undefined);

  const { loading, error, data } = useQuery(Characters, {
    variables: { page: 1 },
    onCompleted() {
      console.log(data);
    },
  });

  const openCardHandler = (id) => {
    const character = data.characters.results.find((c) => c.id === id);
    console.log(character);
    setOpenCard(false);
    setSelectedCard(character.id);
    return character;
  };

  const onCloseHandler = () => {
    setSelectedCard(undefined);
  };

  return (
    <div className="home-wrapper">
      <div className="container d-flex wrap justify-between">
        {!loading &&
          data.characters.results.map((character) => (
            <Card
              key={character.id}
              isOpen={openCard || selectedCard === character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              status={character.status}
              gender={character.gender}
              origin={character.origin.name}
              episodes={character.episode}
              dimension={character.origin.dimension}
              openCardHandler={openCardHandler}
              onCloseHandler={onCloseHandler}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
