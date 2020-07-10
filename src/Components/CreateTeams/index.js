import React, { useState } from 'react';
import './index.css';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import * as firebase from 'firebase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'

import SimpleModal from './../Modal/index';

import { makeStyles } from '@material-ui/core/styles';

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

export const CreateTeams = () => {
    const classes = useStyles();
    const [team_name, setTeam_name] = useState('');
    const [image, uploadImage] = useState('');
    const [player_name, setPlayerName] = useState([]);
    const [player_position, setPlayerPosition] = useState([]);

    const handleChange = event => {

        if (event.target.name === 'team_name') {
            setTeam_name(event.target.value)
        }
        else if (event.target.name === 'image_upload') {
            uploadImage(event.target.files[0])
        }
        const result = firebase.database().ref().child('Teams')
        //  let starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
        result.on('value', function (snapshot) {
            console.log("values: " + snapshot.val());
        });
    }



    const handleChangePlayers = index => event => {

        let newPlayerName = [...player_name];
        let newPlayerPosition = [...player_position];

        if (event.target.name === 'player_name') {
            newPlayerName[index] = event.target.value;
            setPlayerName(newPlayerName)
        }
        else {
            newPlayerPosition[index] = event.target.value;
            setPlayerPosition(newPlayerPosition)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let players = []
        let i = 0;

        player_name.map(x => {
            const playerObject = {
                "name": x,
                "position": player_position[i]
            }
            console.log("playerObject: " + JSON.stringify(playerObject))

            players[i] = playerObject;
            i++;
        })
        const Team = {
            team_name,
            image,
            players
        }
        setImage(Team);
    }
    const setImage = (Team) => {

        var blob = new Blob([image], { type: "image/jpeg" });

        var storageRef = firebase.storage().ref();
        console.log("image to upload: " + image)
        let uploadTask = storageRef.child('Teams/' + Team.team_name).put(blob);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            function (snapshot) {

                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;

                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    Team.image = downloadURL;
                    const result = firebase.database().ref().child('Teams').push(Team);
                    result.then((resolve) => {
                        console.log(resolve)
                    }).catch((reject) =>{
                        console.log(reject)
                    })
                });
            });
    }
    const positions = ['captain', 'batsman', 'bowler', 'wicketkeeper']
    return (

        <div align="center" className="CreateTeams">
            <Container maxWidth="sm">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>


                        <span className="heading">Create Team</span>
                        <form onSubmit={handleSubmit.bind(this)}>
                            <div>
                                <TextField className= "textField" color='primary' required={true} fullWidth={true}  label="Team Name" type="text" name="team_name" onChange={handleChange.bind(this)} />
                            </div>
                            {Array.apply(null, Array(11)).map((player, index) =>
                                <div className="create_team_form">

                                    <TextField color='primary' required={true} fullWidth={true} id="standard-basic" label="name" type="text" name="player_name" onChange={handleChangePlayers(index).bind(this)} />
                                    <Select fullWidth={true} id="standard-basic" name="player_position" onChange={handleChangePlayers(index).bind(this)} >
                                        {positions.map(position => (<MenuItem value={position}>{position}</MenuItem>))}
                                    </Select>
                                </div>
                            )}
                            <input id="file-upload" name="image_upload" onChange={handleChange.bind(this)} type="file" />
                            <label for="file-upload" className="custom-file-upload">
                                Upload image
                        </label>
                            <br />
                            
                            <Button variant="contained" type="submit" color="primary">Submit</Button>
                        </form>
                        <br />

                    </Paper>
                </Grid>
            </Container>

        </div >
    );
}


