import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTg9wad1GYUcHkhnv6NiCKFZAf2SGEO1o",
  authDomain: "mindfulmoney-cf760.firebaseapp.com",
  projectId: "mindfulmoney-cf760",
  storageBucket: "mindfulmoney-cf760.appspot.com",
  messagingSenderId: "58968226448",
  appId: "1:58968226448:web:b9d011dcdc7eb24aa7f615",
  measurementId: "G-T2F8RNDXSM",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init each service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
