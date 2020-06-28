import React, { useState } from 'react';
import './index.css';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import * as firebase from 'firebase';

export const CreateMOM = () => {

    const [team_name, setTeam_name] = useState('');
    const [picture, uploadImage] = useState('');
    const [player_name, setPlayerName] = useState([]);
    const [player_position, setPlayerPosition] = useState([]);

    const handleChange = event => {
       
        if (event.target.name === 'image_upload') {
            uploadImage(event.target.files[0])
        }
        const result = firebase.database().ref().child('mom')
        //  let starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
        result.on('value', function (snapshot) {
            console.log("values: " + snapshot.val());
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const Team = {
            picture
        }
        setImage(Team);
        console.log("TEAM: "+Team.picture)
    }
    const setImage = (Team) => {

        var blob = new Blob([picture], { type: "image/jpeg" });

        var storageRef = firebase.storage().ref();
        console.log("image to upload: " + picture)
        let uploadTask = storageRef.child('mom_photos/' + Team.picture).put(blob);

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
                    Team.picture = downloadURL;
                    const result = firebase.database().ref().child('mom').push(Team);
                    result.then((resolve) => {
                        console.log(resolve)
                    })
                });
            });
    }
    return (

        <div align="center" className="CreateTeams">
            <div className="container">
                <h3>Create MOM</h3>
                <form onSubmit={handleSubmit.bind(this)}>
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


