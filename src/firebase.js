import firebase from "firebase"
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAspTCB9TzQ5kFX-0nnnV303fM0yUdaTNY",
    authDomain: "mysocialapp-c2fa9.firebaseapp.com",
    projectId: "mysocialapp-c2fa9",
    storageBucket: "mysocialapp-c2fa9.appspot.com",
    messagingSenderId: "60580697483",
    appId: "1:60580697483:web:8452559d552bc08a334b8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider, storage};