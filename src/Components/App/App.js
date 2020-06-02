import React, { useState } from 'react';
import './App.css';
import LiveScoringCricket from './../LiveScoring/Cricket/index';
import {CreateTeams} from './../CreateTeams/index';

function App() {

  return (
    <div className="App">
      <h1>Main App</h1>
      <CreateTeams/>
    </div>
  );
}

export default App;
