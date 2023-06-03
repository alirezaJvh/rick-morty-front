import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

Provider.prototype = {
  children: PropTypes.node.isRequired,
};

export default Provider;
