import React from 'react';
import Login from './Login';
import { useAuth } from '../api/Provider';
import './App.scss';
import Home from './Home';
import Header from '../components/Header';

function App() {
  const { isAuth, user, dispatch } = useAuth();

  const loginPage = <Login dispatch={dispatch} />;

  const homePage = <Home />;

  return (
    <div className="w-100 app-container">
      <Header isAuth={isAuth} user={user} dispatch={dispatch} />
      {isAuth ? homePage : loginPage}
    </div>
  );
}

export default App;
