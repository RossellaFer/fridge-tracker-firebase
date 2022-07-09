import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLLn_MWaGNzA1F5B9AMgUrrNMN8hkvw6U",
  authDomain: "fridge-tracker-a606a.firebaseapp.com",
  projectId: "fridge-tracker-a606a",
  storageBucket: "fridge-tracker-a606a.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-H0R482WSSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);