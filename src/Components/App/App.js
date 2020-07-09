import React, { useState } from 'react';
import './App.css';
import LiveScoringCricket from './../LiveScoring/Cricket/index';
import ShowTeams from './../ShowTeams/index';
import {CreateTeams} from './../CreateTeams/index';
import LiveScoring from './../LiveScoring/Cricket/index';
import MOM from './../MOM/Cricket/index';
import {CreateMOM} from './../CreateMOM/index';
import PointsTable from './../PointsTable/index';
import {CreatePointsTable} from './../CreatePointsTable/index';

import Sidebar from './../Sidebar/index';
import LandingPage from './../LandingPage/index';
const App = () =>{

  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
