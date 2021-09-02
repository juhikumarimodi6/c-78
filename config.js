import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3x-X0Y_OAI7sX4Djmi2cP8iZgswBT5k4",
    authDomain: "book-santa-94005.firebaseapp.com",
    databaseURL: "https://book-santa-94005-default-rtdb.firebaseio.com",
    projectId: "book-santa-94005",
    storageBucket: "book-santa-94005.appspot.com",
    messagingSenderId: "396274925993",
    appId: "1:396274925993:web:66f8a838e5d15b37c344b8",
    measurementId: "G-2NXK13WWW3"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();