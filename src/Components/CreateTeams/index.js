import React, { useState } from 'react';
import './index.css';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { db } from '../../firebase';
import * as firebase from 'firebase';

export const CreateTeams = () => {

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
        let uploadTask = storageRef.child('Teams/' + "logo").put(blob);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    Team.image = downloadURL;
                    const result = firebase.database().ref().child('Teams').push(Team);
                    result.then((resolve) => {
                        console.log(resolve)
                    })
                });
            });
    }
    const positions = ['captain', 'batsman', 'bowler', 'wicketkeeper']
    return (

        <div align="center" className="CreateTeams">
            <div className="container">
                <h3>Create Team</h3>
                <form onSubmit={handleSubmit.bind(this)}>
                    <div>
                        <TextField color='primary' required={true} fullWidth={true} id="standard-basic" label="Team Name" type="text" name="team_name" onChange={handleChange.bind(this)} />
                    </div>

                    {/* asdf */}
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
            </div>
        </div>
    );
}


