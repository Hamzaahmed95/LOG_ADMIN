
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase';

export const getAllTeams = () => dispatch => {
    const result = firebase.database().ref().child('Teams').orderByChild("players");
    let teamObject = [];
    result.on('value', function (snapshot) {
        snapshot.forEach(function (userSnapshot) {

            let each_team = userSnapshot.val().players;
            let each_logo = userSnapshot.val().image;
            let each_team_name = userSnapshot.val().team_name;
            const team = {
                "team": each_team_name,
                "players": each_team,
                "logo": each_logo
            }

            teamObject = teamObject.concat([team])
            console.log("TEAMSOBJECT: " + teamObject)
        })
        dispatch({
            type: 'GET_ALL_TEAMS',
            payload: teamObject
        })
    });

}