import React from 'react';
import Login from './Login';
import { useAuth } from '../api/Provider';
import Home from './Home';
import Header from '../components/Header';
import './App.scss';

function App() {
  const { isAuth, user, dispatch } = useAuth();

  const loginPage = <Login dispatch={dispatch} />;

  const homePage = <Home user={user} dispatch={dispatch} />;

  return (
    <div className="w-100 app-container">
      <Header isAuth={isAuth} user={user} dispatch={dispatch} />
      {isAuth ? homePage : loginPage}
    </div>
  );
}

export default App;
