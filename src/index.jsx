import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './pages/App';
import { Provider } from './api/Provider';
import './assets/styles/main.scss';

function HotReloadableAppComponent() {
  return (
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

const HotReloadableApp = hot(module)(HotReloadableAppComponent);

ReactDOM.render(<HotReloadableApp />, document.getElementById('root'));
