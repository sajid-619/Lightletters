// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase";
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAO9kSD0Y3y-UzWqASoYJLVGSaMVprEkcs",
    authDomain: "lightletters-6c319.firebaseapp.com",
    databaseURL: "https://lightletters-6c319.firebaseio.com",
    projectId: "lightletters-6c319",
    storageBucket: "lightletters-6c319.appspot.com",
    messagingSenderId: "598431328044",
    appId: "1:598431328044:web:bde5b808798ebf287eee89",
    measurementId: "G-ERD2YYXY3X"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;