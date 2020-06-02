// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMju7iGGR0rjFoifrtYMgtlbGkTFTOhiA",
    authDomain: "log2017-2a6a1.firebaseapp.com",
    databaseURL: "https://log2017-2a6a1.firebaseio.com",
    projectId: "log2017-2a6a1",
    storageBucket: "log2017-2a6a1.appspot.com",
    messagingSenderId: "868590517877",
    appId: "1:868590517877:web:873b479e81dae1ccf8023c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();