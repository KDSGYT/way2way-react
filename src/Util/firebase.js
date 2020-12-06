import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

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


/**
 * const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_API,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
 */
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//   export the module that you want to use eg. firestore
export const firestore = firebase.firestore()

export default firebase;