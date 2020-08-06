import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXQomYqRK6x-SSloBb6QUpY83FLUsz-4g",
  authDomain: "clone-bcc2f.firebaseapp.com",
  databaseURL: "https://clone-bcc2f.firebaseio.com",
  projectId: "clone-bcc2f",
  storageBucket: "clone-bcc2f.appspot.com",
  messagingSenderId: "910630541947",
  appId: "1:910630541947:web:58d1b51f92aca8ed3c20de",
  measurementId: "G-L3T1KYFN85",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
