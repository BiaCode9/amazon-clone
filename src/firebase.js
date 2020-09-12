import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUBMvkxFSVX3UyEzR6cwEqzkjyHBsnQUA",
  authDomain: "clone-79dcf.firebaseapp.com",
  databaseURL: "https://clone-79dcf.firebaseio.com",
  projectId: "clone-79dcf",
  storageBucket: "clone-79dcf.appspot.com",
  messagingSenderId: "171551441954",
  appId: "1:171551441954:web:4c401be0d41c334e65b67b",
  measurementId: "G-3P00NMM2JS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };