import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLLn_MWaGNzA1F5B9AMgUrrNMN8hkvw6U",
  authDomain: "fridge-tracker-a606a.firebaseapp.com",
  projectId: "fridge-tracker-a606a",
  storageBucket: "fridge-tracker-a606a.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-H0R482WSSC",
};

const logout = () => {
  signOut(auth);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, logout };
