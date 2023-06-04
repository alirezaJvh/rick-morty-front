import React from 'react';
import Login from './Login';
import { useAuth } from '../api/Provider';
import './App.css';

function App() {
  const { isAuth, dispatch } = useAuth();
  if (!isAuth) {
    return <Login dispatch={dispatch} />;
  }
  return <div>you are already login</div>;
}

export default App;
