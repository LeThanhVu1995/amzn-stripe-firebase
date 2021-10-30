import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA883UBF40wubDcvlCEaFgKpj04Mr6mELc",
  authDomain: "amzn-2-yt-6a76e.firebaseapp.com",
  projectId: "amzn-2-yt-6a76e",
  storageBucket: "amzn-2-yt-6a76e.appspot.com",
  messagingSenderId: "640710515293",
  appId: "1:640710515293:web:970d59bf0b03780c784bb4",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
