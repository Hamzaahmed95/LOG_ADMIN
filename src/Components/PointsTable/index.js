import React, { Component } from 'react';
import './index.css';
import * as firebase from 'firebase';
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export const PointsTable = () => {
    const Pictures = useSelector(state => state.points_table.Pictures);
 
        return (
            <div className="MOM">
                <Grid item xs={12}>
                    <Paper className="s">
                        <div className="sub_teams">
                            <img src={Pictures} width={400} height={420} />
                        </div>
                    </Paper>

                </Grid>
            </div>
        );
}

