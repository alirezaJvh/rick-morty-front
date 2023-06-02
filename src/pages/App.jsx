import React from 'react';

import Provider from '../api/Provider';
import PickleRick from '../components/PickleRick';

import './App.css';

function App() {
  return (
    <Provider>
      <PickleRick />
    </Provider>
  );
}

export default App;
