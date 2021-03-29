import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyCZ3yvEc8U53jWnVCAnyksZm9CcLPd8Pws",
  authDomain: "clone-195.firebaseapp.com",
  projectId: "clone-195",
  storageBucket: "clone-195.appspot.com",
  messagingSenderId: "1028257084344",
  appId: "1:1028257084344:web:2ba66dd92f82556581154d",
  measurementId: "G-H7PBNLXR51",
});

const auth = firebaseApp.auth();

export { auth };
