import React from 'react';
import './index.css';
import balls from './../../assets/ball_s.png'
import home_icon from './../../assets/home.png'
import teams_icon from './../../assets/teams.png'
import pointstable_icon from './../../assets/pointstable.png'
import scoring_icon from './../../assets/scoring.png'
import mom from './../../assets/mom.png'

import {useDispatch,useSelector} from 'react-redux'

import { getHomeComponent,getTeamsComponent,getPointsTableComponent,getScoreComponent,getMOMComponent } from '../../actions/sidebar';

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


  return (
    <div className="Sidebar">
      <img src={balls} width={130} height={130} />

      <div className="items">
      <a style={{backgroundColor: statusHome ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickHome.bind(this)}href="#" className="first">
          <img src={home_icon} width={20} height={20} />
          <span className="home_text">Home</span>
        </a>

        <a style={{backgroundColor: statusTeams ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickTeams.bind(this)} href="#" >
          <img src={teams_icon} width={20} height={20} />
          <span className="home_text">Teams</span>
        </a>
        <a style={{backgroundColor: statusPointsTable ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickPointsTable.bind(this)} href="#" >
          <img src={pointstable_icon} width={20} height={20} />
          <span className="home_text">Points Table</span>
        </a>
        <a style={{backgroundColor: statusScoring ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickScore.bind(this)} href="#" >
          <img src={scoring_icon} width={20} height={20} />
          <span className="home_text">Scoring</span>
        </a>
        <a style={{backgroundColor: statusMom ? '#e0e0e0' : '#ffffff'}}
        onClick ={handleClickMom.bind(this)} href="#" >
          <img src={mom} width={20} height={20} />
          <span className="home_text">Man of the match</span>
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
