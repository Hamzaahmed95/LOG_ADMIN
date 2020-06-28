
import React, { useState, Component } from 'react';
import './index.css';
import * as firebase from 'firebase';
import { firebaseConfig } from '../../firebase';

export default class ShowTeams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            logos: [],
            teamObject:[]
        }
    }

    componentDidMount() {
        const result = firebase.database().ref().child('Teams').orderByChild("players");
        let that = this;

        result.on('value', function (snapshot) {
            snapshot.forEach(function (userSnapshot) {
               
                let each_team = userSnapshot.val().players;
                let each_logo = userSnapshot.val().image;
                let each_team_name = userSnapshot.val().team_name;
                const team ={
                    "team":each_team_name,
                    "players":each_team,
                    "logo":each_logo
                }
              that.setState({ 
                teamObject: that.state.teamObject.concat([team])
              })

            });
        });
    }

    render() {

        return (
            <div className="ShowTeams">
                <h1>ShowTeams</h1>
                <div className="teams">

                    
                    {this.state.teamObject.map(teamObject =>
                        <div className="sub_teams">
                             <img src={teamObject.logo} width={100} height={100}/>
                             <h5>{teamObject.team_name}</h5>
                            {teamObject.players.map(player => (
                                <div>
                                    <p>{player.name} <span>({player.position})</span></p>
                                    
                                </div>
                            ))}
                           
                            
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

