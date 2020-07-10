import React, { useState } from 'react';
import './index.css';
import LiveScoringCricket from './../LiveScoring/Cricket/index';
import { ShowTeams } from './../ShowTeams/index';
import { CreateTeams } from './../CreateTeams/index';
import {MOM} from './../MOM/Cricket/index';
import  Navbar  from './../Navbar/index';

import {PointsTable} from './../PointsTable/index';
import { CreatePointsTable } from './../CreatePointsTable/index';
import { Home } from './../Home/index';


import { useDispatch, useSelector } from 'react-redux'

const MainComponents = () => {

  const statusHome = useSelector(state => state.sidebar.HomeStatus);
  const statusTeams = useSelector(state => state.sidebar.TeamSatus);
  const statusPointsTable = useSelector(state => state.sidebar.PointsTableSatus);
  const statusScoring = useSelector(state => state.sidebar.ScoreSatus);
  const statusMom = useSelector(state => state.sidebar.MomSatus);
  const statusCreateTeam = useSelector(state => state.sidebar.CreateTeamStatus);


  return (
    <div className="MainComponents">
      <Navbar/>
      {statusHome ?
        <div >
          <Home />
        </div> : ''}

      {statusTeams ?
        <div>
          <ShowTeams />
        </div> : ''}

      {statusPointsTable ?
        <div >
          <PointsTable />
        </div> : ''}

      {statusScoring ?
        <div>
          <LiveScoringCricket />
        </div> : ''}

      {statusMom ?
        <div>
          <MOM />
        </div> : ''}
        {statusCreateTeam ?
        <div>
          <CreateTeams />
        </div> : ''}
    </div>
  );
}

export default MainComponents;
