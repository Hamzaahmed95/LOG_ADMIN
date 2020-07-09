import React, { useState } from 'react';
import './index.css';
import balls from './../../assets/ball_s.png'
import home_icon from './../../assets/home.png'
import teams_icon from './../../assets/teams.png'
import pointstable_icon from './../../assets/pointstable.png'
import scoring_icon from './../../assets/scoring.png'
import mom from './../../assets/mom.png'

const Sidebar = () => {

  return (
    <div className="Sidebar">
      <img src={balls} width={130} height={130} />

      <div className="items">
        <a href="" className="first">
          <img src={home_icon} width={20} height={20} />
          <span className="home_text">Home</span>
        </a>

        <a href="" >
          <img src={teams_icon} width={20} height={20} />
          <span className="home_text">Teams</span>
        </a>
        <a href="" >
          <img src={pointstable_icon} width={20} height={20} />
          <span className="home_text">Points Table</span>
        </a>
        <a href="" >
          <img src={scoring_icon} width={20} height={20} />
          <span className="home_text">Scoring</span>
        </a>
        <a href="" >
          <img src={mom} width={20} height={20} />
          <span className="home_text">Man of the match</span>
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
