import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCcl-VmqqdwySv0jUuG0S3KQHSkeqXtcqs",
    authDomain: "way-to-way.firebaseapp.com",
    databaseURL: "https://way-to-way.firebaseio.com",
    projectId: "way-to-way",
    storageBucket: "way-to-way.appspot.com",
    messagingSenderId: "731977739171",
    appId: "1:731977739171:web:fab6418fb0741b024e8816",
    measurementId: "G-SZ6BVXY9Z8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
export default firebase;