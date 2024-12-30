import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyA-4vxjTgz3BlIgCfCLjxznhJrpSF0X1nU",
  authDomain: "modul-9-pab.firebaseapp.com",
  databaseURL: "https://modul-9-pab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "modul-9-pab",
  storageBucket: "modul-9-pab.firebasestorage.app",
  messagingSenderId: "868327942962",
  appId: "1:868327942962:web:8515905cee102a0941c52b"
});

const FIREBASE = firebase;

export default FIREBASE;
