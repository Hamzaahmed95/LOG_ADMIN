import React, { useState } from 'react';
import './App.css';
import LiveScoringCricket from './../LiveScoring/Cricket/index';
import ShowTeams from './../ShowTeams/index';

const App = () =>{

  return (
    <div className="App">
      <h1>Main App</h1>
      <ShowTeams/>
    </div>
  );
}

export default App;
