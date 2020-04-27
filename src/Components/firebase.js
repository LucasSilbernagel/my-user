// firebase.js
import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
  apiKey: "AIzaSyB2ad53R7n146eY70wpxPvFDgOYbM7E8oA",
  authDomain: "my-user-1a244.firebaseapp.com",
  databaseURL: "https://my-user-1a244.firebaseio.com",
  projectId: "my-user-1a244",
  storageBucket: "my-user-1a244.appspot.com",
  messagingSenderId: "369192256471",
  appId: "1:369192256471:web:17e4c189e8009246a34192"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;