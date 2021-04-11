import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB1lLBomkEqux9rq3Ln_4wH0HJpmUJfaPU",
    authDomain: "react-native-firebase-b6fd8.firebaseapp.com",
    projectId: "react-native-firebase-b6fd8",
    storageBucket: "react-native-firebase-b6fd8.appspot.com",
    messagingSenderId: "767592100970",
    appId: "1:767592100970:web:a2aecf7f2fbf03e2a54613"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
    firebase,
    db
}