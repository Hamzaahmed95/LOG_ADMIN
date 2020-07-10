import React, { useState } from 'react';
import './index.css';
import profile_icon from './../../assets/profile.png'
import help_icon from './../../assets/help.png'
import bell_icon from './../../assets/bell.png'

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className="button1">
                <span className="headings">Home</span>
            </div>
            <div className="button2">
                <img src={help_icon} width={20} height={20} />
                <img src={bell_icon} width={20} height={20} />
                <img className="profile_icon" src={profile_icon} width={20} height={20} />
                <span className="heading2s">Hamza Ahmed</span>
            </div>

        </div>
    );
}

export default Navbar;
