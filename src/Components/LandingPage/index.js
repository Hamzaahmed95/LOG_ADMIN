import React, { useState } from 'react';
import './index.css';

import Sidebar from './../Sidebar/index';
import MainComponents from './../MainComponents/index';


const LandingPage = () => {

  return (
    <div className="LandingPage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_components">
        <MainComponents />
      </div>

    </div>
  );
}

export default LandingPage;
