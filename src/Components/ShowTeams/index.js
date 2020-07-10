
import React, { useState, Component } from 'react';
import './index.css';

import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
    const teamObject = useSelector(state => state.home_api.teamObject);
    let count = 0;

    return (
        <div className="ShowTeams">
            <div className="teams">

                {teamObject.map(teamObject =>
                    <div className="sub_teams">
                        <Grid className="teamss" container spacing={1}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>

                                    <img src={teamObject.logo} width={100} height={100} />
                                    <h5>{teamObject.team_name}</h5>
                                    {teamObject.players.map(player => (
                                        <div>
                                            {count == 0 ? <p className="players"><b>{player.name} {short(player.position)}</b></p> : <p className="players">{player.name} {short(player.position)}</p>}
                                            <div className="hide">{count++}</div>
                                            <hr className="line" />
                                        </div>
                                    ))}
                                    <div className="hide">{count = 0}</div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
        </div>
    );
}

