import React, { useReducer, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const AuthContext = createContext();

const clearToken = () => {
  localStorage.clear();
  return {
    isAuth: false,
  };
};

const saveToken = (state, { payload }) => {
  const { token, user } = payload;
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  return {
    isAuth: true,
    token,
    user,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const obj = saveToken(state, action);
      return obj;
    }
    case 'LOGOUT': {
      const obj = clearToken();
      return obj;
    }
    default:
      return state;
  }
};

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const initAuthState = () => {
  const token = localStorage.getItem('token');
  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  return {
    isAuth: !!token,
    user,
  };
};

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initAuthState());
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useAuth, Provider };
