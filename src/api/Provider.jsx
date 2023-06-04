import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
