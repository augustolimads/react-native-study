import firebase from "firebase";
import "firebase/storage";

//configuracao sem autenticacao
var firebaseConfig = {
  apiKey: "AIzaSyBzVwdJZK3spz0OGUEQLc73zOOfpkioviw",
  authDomain: "task-d05e6.firebaseapp.com",
  projectId: "task-d05e6",
  storageBucket: "task-d05e6.appspot.com",
  messagingSenderId: "537811225571",
  appId: "1:537811225571:web:fbf69f65e3e8d46a3daed6",
};

//configuracao com autenticacao
var ConfigAuth = {
  apiKey: "AIzaSyDMqa-J_2PuRofWtMhQkJCzc2tL5HvaPaM",
  authDomain: "task-auth-4b80c.firebaseapp.com",
  projectId: "task-auth-4b80c",
  storageBucket: "task-auth-4b80c.appspot.com",
  messagingSenderId: "384562473739",
  appId: "1:384562473739:web:a37336460b953072d4900e",
};

// Initialize Firebase
firebase.initializeApp(ConfigAuth);

export default firebase;
