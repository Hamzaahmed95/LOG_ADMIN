import React, { useState } from 'react';
import './index.css';
import balls from './../../assets/ball_s.png'
import home_icon from './../../assets/home.png'
import teams_icon from './../../assets/teams.png'
import pointstable_icon from './../../assets/pointstable.png'
import scoring_icon from './../../assets/scoring.png'
import mom from './../../assets/mom.png'

import {useDispatch} from 'react-redux'

import { getHomeComponent,getTeamsComponent,getPointsTableComponent,getScoreComponent,getMOMComponent } from '../../actions/sidebar';

const Sidebar = () => {

  const dispatch = useDispatch()

  const handleClickHome = (event) => {
    dispatch(getHomeComponent())
  }
  const handleClickTeams = (event) => {
    dispatch(getTeamsComponent())
  }
  const handleClickPointsTable = (event) => {
    dispatch(getPointsTableComponent())
  }
  const handleClickScore = (event) => {
    dispatch(getScoreComponent())
  }
  const handleClickMom = (event) => {
    dispatch(getMOMComponent())
  }


  return (
    <div className="Sidebar">
      <img src={balls} width={130} height={130} />

      <div className="items">
        <a onClick ={handleClickHome.bind(this)}href="#" className="first">
          <img src={home_icon} width={20} height={20} />
          <span className="home_text">Home</span>
        </a>

        <a onClick ={handleClickTeams.bind(this)} href="#" >
          <img src={teams_icon} width={20} height={20} />
          <span className="home_text">Teams</span>
        </a>
        <a onClick ={handleClickPointsTable.bind(this)} href="#" >
          <img src={pointstable_icon} width={20} height={20} />
          <span className="home_text">Points Table</span>
        </a>
        <a onClick ={handleClickScore.bind(this)} href="#" >
          <img src={scoring_icon} width={20} height={20} />
          <span className="home_text">Scoring</span>
        </a>
        <a onClick ={handleClickMom.bind(this)} href="#" >
          <img src={mom} width={20} height={20} />
          <span className="home_text">Man of the match</span>
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
