import React, { useState } from 'react';
import './App.css';
import LiveScoringCricket from './../LiveScoring/Cricket/index';
import ShowTeams from './../ShowTeams/index';
import {CreateTeams} from './../CreateTeams/index';
import LiveScoring from './../LiveScoring/Cricket/index';
import MOM from './../MOM/Cricket/index';

const App = () =>{

  return (
    <div className="App">
      <h1>Main App</h1>
      <MOM/>
    </div>
  );
}

export default App;
