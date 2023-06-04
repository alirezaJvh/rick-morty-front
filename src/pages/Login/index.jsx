import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { LoginOrCreateUser } from '../../api/graphql/auth.gql';
import './style.scss';

function Login({ dispatch }) {
  const [username, setUsername] = useState('');

  const [mutate, { loading }] = useMutation(LoginOrCreateUser, {
    onCompleted({ loginOrCreateUser: { token, user } }) {
      dispatch({ type: 'LOGIN', payload: { token, user } });
    },
  });

  const loginHandler = () => {
    mutate({ variables: { username } });
  };

  return (
    <div className="h-100 d-flex column justify-center items-center">
      <div className="login-input p-relative">
        <TextField
          value={username}
          placeholder="Username"
          onChange={setUsername}
        />
      </div>
      <div className="login-btn">
        <Button loading={loading} onClick={loginHandler}>
          Login or Signup
        </Button>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Login;
