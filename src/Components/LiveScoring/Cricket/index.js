import React, { useState } from 'react';
import logo1 from '../../../assets/stags.png';
import logo2 from '../../../assets/vs1.png';
import logo3 from '../../../assets/dires.png';
import './index.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
function LiveScoringCricket() {

    let first = [0, 1, 2, 3, 4, 5, 5, 3, 4, 5, 5];
    return (
        <div className="LiveScoringCricket">

            <Grid item xs={12}>
                <Paper className="s">
                    <div className="main_team_logo">
                        <div className="logo1">
                            <img height={100} width={125} src={logo1} />
                            <div className="main_runs">
                                <div className="logo1">
                                    <h1>100<span>/</span>0</h1>
                                </div>
                                <div className="logo2">
                                    <h3>(10.0 Overs)</h3>
                                </div>
                            </div>
                        </div>
                        <div className="logo2">
                            <img height={100} width={125} src={logo2} />
                        </div>
                        <div className="logo3">
                            <img height={100} width={125} src={logo3} />
                            <div className="main_runs">
                                <div className="logo1">
                                    <h1>100<span>/</span>0</h1>
                                </div>
                                <div className="logo2">
                                    <h3>(10.0 Overs)</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="players_name">
                        <div className="batsmen">
                            <h5>H.Ahmed <span>25(15)</span></h5>
                            <h5>H.Ahmed <span>25(15)</span></h5>
                        </div>

                        <div className="bowlers">
                            <h5>H.Ahmed <span>25(15)</span></h5>
                        </div>
                    </div>


                    <div className="overs">
                        {first.map(over => <h4 className="overs_items">{over}</h4>)}
                    </div>

                    <hr />
                </Paper>

            </Grid>
        </div>
    );
}

export default LiveScoringCricket;
