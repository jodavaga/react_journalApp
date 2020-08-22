import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBEvviujyX8W25IDkBk7wTRjI1_-nI5D5c",
    authDomain: "journalapp-udemy.firebaseapp.com",
    databaseURL: "https://journalapp-udemy.firebaseio.com",
    projectId: "journalapp-udemy",
    storageBucket: "journalapp-udemy.appspot.com",
    messagingSenderId: "64739744809",
    appId: "1:64739744809:web:28608c8a6e96d74e8f1038",
    measurementId: "G-5PKJBZ2HZG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore config: https://www.youtube.com/playlist?list=PLCKuOXG0bPi29EkcAuVCln9ISbExcQk66
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}