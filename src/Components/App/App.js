import React, { useState } from 'react';
import './App.css';

import LandingPage from './../LandingPage/index';
import {CreateTeams} from './../CreateTeams/index';

import store from '../../store'
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
