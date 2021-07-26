import firebase from "firebase";
import "firebase/storage";

var ConfigAuth = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
firebase.initializeApp(ConfigAuth);

export default firebase;
