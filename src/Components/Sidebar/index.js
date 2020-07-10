import React from 'react';
import './index.css';
import flog_icon from './../../assets/flogggcopy.png'
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
import { getPointsTable} from '../../actions/points_table';
import { getMOM} from '../../actions/mom';
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
  dispatch(getPointsTable())
  dispatch(getMOM())
  


  return (
    <div className="Sidebar">
      <img src={flog_icon} width={100} height={100} />

      <div className="items">
      <a style={{backgroundColor: statusHome ? '#2E4269' : '#3368d6', fontWeight: statusHome? 'bold':'normal'}}
        onClick ={handleClickHome.bind(this)}href="#" className="first">
          <img src={home_icon} width={20} height={20} />
          <span  style={{fontWeight: statusHome? 'bold':'normal'}}className="home_text">Home</span>
        </a>

        <a style={{backgroundColor: statusTeams ? '#2E4269' : '#3368d6'}}
        onClick ={handleClickTeams.bind(this)} href="#" >
          <img src={teams_icon} width={20} height={20} />
          <span style={{fontWeight: statusTeams? 'bold':'normal'}} className="home_text">Teams</span>
        </a>
        <a style={{backgroundColor: statusPointsTable ? '#2E4269' : '#3368d6'}}
        onClick ={handleClickPointsTable.bind(this)} href="#" >
          <img src={pointstable_icon} width={20} height={20} />
          <span style={{fontWeight: statusPointsTable? 'bold':'normal'}} className="home_text">Points Table</span>
        </a>
        <a style={{backgroundColor: statusScoring ? '#2E4269' : '#3368d6'}}
        onClick ={handleClickScore.bind(this)} href="#" >
          <img src={scoring_icon} width={20} height={20} />
          <span style={{fontWeight: statusScoring? 'bold':'normal'}} className="home_text">Scoring</span>
        </a>
        <a style={{backgroundColor: statusMom ? '#2E4269' : '#3368d6'}}
        onClick ={handleClickMom.bind(this)} href="#" >
          <img src={mom} width={20} height={20} />
          <span style={{fontWeight: statusMom? 'bold':'normal'}} className="home_text">Man of the match</span>
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
