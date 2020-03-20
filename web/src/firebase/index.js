import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTGxXqfebtNNB_MySzX9s6eI_V_LJ9NkI",
  authDomain: "late-34a1d.firebaseapp.com",
  databaseURL: "https://late-34a1d.firebaseio.com",
  projectId: "late-34a1d",
  storageBucket: "late-34a1d.appspot.com",
  messagingSenderId: "20315797584",
  appId: "1:20315797584:web:d81289f3704113da1a3955",
  measurementId: "G-BQH47233N1"
};

let app = firebase.initializeApp(firebaseConfig);
let db = app.database();

export default db;