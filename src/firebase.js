import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcgYLZ34CVcYbMANGn7HxFluM_9XUboRE",
  authDomain: "fir-c267f.firebaseapp.com",
  projectId: "fir-c267f",
  storageBucket: "fir-c267f.appspot.com",
  messagingSenderId: "448176913669",
  appId: "1:448176913669:web:df3c48eab0bfb54cfc4b6c",
  measurementId: "G-RP9F1HFR1J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
