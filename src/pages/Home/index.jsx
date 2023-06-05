import React from 'react';
import { useQuery } from '@apollo/client';
import { Characters } from '../../api/graphql/characters.gql';
import Card from './../../components/Card';
import './style.scss';

function Home() {
  const { loading, error, data } = useQuery(Characters, {
    variables: { page: 1 },
    onCompleted() {
      console.log(data);
    },
  });
  return (
    <div className="home-wrapper">
      <div className="container d-flex wrap justify-between">
        {!loading &&
          data.characters.results.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              status={character.status}
              gender={character.gender}
              origin={character.origin.name}
              dimension={character.origin.dimension}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
