import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './pages/App.jsx';
import './assets/styles/main.scss';

const HotReloadableApp = hot(module)(App);

ReactDOM.render(<HotReloadableApp />, document.getElementById('root'));
