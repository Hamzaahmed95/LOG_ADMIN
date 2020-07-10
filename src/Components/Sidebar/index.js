import React from 'react';
import './index.css';
import balls from './../../assets/ball_s.png'
import home_icon from './../../assets/home.png'
import teams_icon from './../../assets/teams.png'
import pointstable_icon from './../../assets/pointstable.png'
import scoring_icon from './../../assets/scoring.png'
import mom_red from './../../assets/mom_red.png'
import home_red_icon from './../../assets/home_red.png'
import teams_red_icon from './../../assets/teams_red.png'
import pointstable_red_icon from './../../assets/pointstable_red.png'
import scoring_red_icon from './../../assets/scoring_red.png'
import mom from './../../assets/mom.png'


import {useDispatch,useSelector} from 'react-redux'

import { getHomeComponent,getTeamsComponent,getPointsTableComponent,getScoreComponent,getMOMComponent } from '../../actions/sidebar';

import { getAllTeams } from '../../actions/home_apis';
const Sidebar = () => {

  const dispatch = useDispatch()

  const statusHome = useSelector(state => state.sidebar.HomeStatus);
  const statusTeams = useSelector(state => state.sidebar.TeamSatus);
  const statusPointsTable = useSelector(state => state.sidebar.PointsTableSatus);
  const statusScoring = useSelector(state => state.sidebar.ScoreSatus);
  const statusMom = useSelector(state => state.sidebar.MomSatus);

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
  dispatch(getAllTeams())
  


  return (
    <div className="Sidebar">
      <img src={balls} width={130} height={130} />

      <div className="items">
      <a style={{backgroundColor: statusHome ? '#e0e0e0' : '#ffffff', fontWeight: statusHome? 'bold':'normal'}}
        onClick ={handleClickHome.bind(this)}href="#" className="first">
          <img src={statusHome? home_red_icon:home_icon} width={20} height={20} />
          <span  style={{fontWeight: statusHome? 'bold':'normal'}}className="home_text">Home</span>
        </a>

        <a style={{backgroundColor: statusTeams ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickTeams.bind(this)} href="#" >
          <img src={statusTeams? teams_red_icon:teams_icon} width={20} height={20} />
          <span style={{fontWeight: statusTeams? 'bold':'normal'}} className="home_text">Teams</span>
        </a>
        <a style={{backgroundColor: statusPointsTable ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickPointsTable.bind(this)} href="#" >
          <img src={statusPointsTable? pointstable_red_icon:pointstable_icon} width={20} height={20} />
          <span style={{fontWeight: statusPointsTable? 'bold':'normal'}} className="home_text">Points Table</span>
        </a>
        <a style={{backgroundColor: statusScoring ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickScore.bind(this)} href="#" >
          <img src={statusScoring? scoring_red_icon:scoring_icon} width={20} height={20} />
          <span style={{fontWeight: statusScoring? 'bold':'normal'}} className="home_text">Scoring</span>
        </a>
        <a style={{backgroundColor: statusMom ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickMom.bind(this)} href="#" >
          <img src={statusMom? mom_red:mom} width={20} height={20} />
          <span style={{fontWeight: statusMom? 'bold':'normal'}} className="home_text">Man of the match</span>
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
