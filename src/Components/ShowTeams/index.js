
import React, { useState, Component } from 'react';
import './index.css';

import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getCreateTeamComponent } from '../../actions/sidebar';
import {useDispatch} from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    parent_paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'white'
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#39507E'
       
    },
}));
const short = (arg) => {
    if (arg === "captain") {
        arg = "(c)"
    }
    else if (arg === "batsman") {
        arg = "(bat)"
    }
    else if (arg === "wicketkeeper") {
        arg = "(wk)"
    }
    else {
        arg = "(bal)"
    }
    return arg
}

export const ShowTeams = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const teamObject = useSelector(state => state.home_api.teamObject);
    let count = 0;
    const handleClickCreateTeam = (event) => {
        dispatch(getCreateTeamComponent())
        
      }

    return (
        <div className="ShowTeams">
            <Grid item xs={12}>
                <Paper className={classes.parent_paper}>

                    <div className="teams">

                        {teamObject.map(teamObject =>
                            <div className="sub_teams">
                                <Grid className="teamss" container spacing={1}>
                                   
                                    <Grid item xs={12}>
                                        <div className="paper">

                                            <img src={teamObject.logo} width={60} height={60} />
                                            <h5>{teamObject.team_name}</h5>
                                            {teamObject.players.map(player => (
                                                <div>
                                                    {count == 0 ? <p className="playersBig"><b>{player.name} {short(player.position)}</b></p> : <p className="playersSmall">{player.name} {short(player.position)}</p>}
                                                    <div className="hide">{count++}</div>
                                                    <hr className="line" />
                                                </div>
                                            ))}
                                            <div className="hide">{count = 0}</div>
                                        </div>
                                    </Grid>
                                </Grid>
                               
                            </div>
                        )}
                        
                    </div>
                    <hr className="bottom_line"/>
                    <Button onClick ={handleClickCreateTeam.bind(this)} className="CreateTeamButton" ariant="contained" type="submit" color="primary">Create Team</Button>
                </Paper>
                
            </Grid>
        </div>
    );
}

