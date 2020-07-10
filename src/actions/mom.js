
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase';

export const getMOM = () => dispatch => {
    const result = firebase.database().ref().child('mom');
    let Pictures = [];

    result.on('value', function (snapshot) {
        snapshot.forEach(function (userSnapshot) {
            Pictures = Pictures.concat([userSnapshot.val().picture])
        });
        dispatch({
            type: 'GET_MOM_API',
            payload: Pictures
        })
    });
}