import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBzVwdJZK3spz0OGUEQLc73zOOfpkioviw",
  authDomain: "task-d05e6.firebaseapp.com",
  projectId: "task-d05e6",
  storageBucket: "task-d05e6.appspot.com",
  messagingSenderId: "537811225571",
  appId: "1:537811225571:web:fbf69f65e3e8d46a3daed6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
