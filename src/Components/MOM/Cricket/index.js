import React, { Component } from 'react';
import './index.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux'


export const MOM = () => {
    const Pictures = useSelector(state => state.mom.Pictures);

    return (
        <div className="MOM">
            <Grid item xs={12}>
                <Paper className="s">
                    {Pictures.map(picture =>
                        <div className="sub_teams">
                            <img src={picture} width={500} height={310} />
                        </div>
                    )}
                </Paper>

            </Grid>
        </div>
    );
}





