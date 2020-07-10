
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase';

export const getPointsTable = () => dispatch => {
    const result = firebase.database().ref().child('pointstable').limitToLast(1);
    let Pictures = '';

    result.on('value', function (snapshot) {
        snapshot.forEach(function (userSnapshot) {
            Pictures = userSnapshot.val().photoUrl
        });
        dispatch({
            type: 'GET_POINTS_TABLE',
            payload: Pictures
        })
    });
}
