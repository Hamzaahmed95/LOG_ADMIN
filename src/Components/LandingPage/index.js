import React, { useState } from 'react';
import './index.css';

import Sidebar from './../Sidebar/index';
import MainComponents from './../MainComponents/index';
import LiveScoringCricket from './../LiveScoring/Cricket/index';
import ShowTeams from './../ShowTeams/index';
import { CreateTeams } from './../CreateTeams/index';
import MOM from './../MOM/Cricket/index';
import { CreateMOM } from './../CreateMOM/index';
import PointsTable from './../PointsTable/index';
import { CreatePointsTable } from './../CreatePointsTable/index';


const LandingPage = () => {
  

  return (
    <div className="LandingPage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_components">
        <MainComponents />
      </div>
      <div className="main_components">
        <ShowTeams />
      </div>
      <div className="main_components">
        <PointsTable />
      </div>
      <div className="main_components">
        <LiveScoringCricket />
      </div>

    </div>
  );
}

export default LandingPage;
