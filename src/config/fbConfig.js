// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz2BP01KM-JIg-JFpV1dsvpTy-DVPAy60",
  authDomain: "react-project-firebase-c2499.firebaseapp.com",
  projectId: "react-project-firebase-c2499",
  storageBucket: "react-project-firebase-c2499.appspot.com",
  messagingSenderId: "193175080222",
  appId: "1:193175080222:web:47c7126c3deae840ca8d0f",
  measurementId: "G-5ZDCQ24J88"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampInSnapshots:true});



export default firebase;

