// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPcbXfx-St4x3hSOQZLAFmgpGhb0xB4lg",
  authDomain: "walkwell-83f8d.firebaseapp.com",
  projectId: "walkwell-83f8d",
  storageBucket: "walkwell-83f8d.appspot.com",
  messagingSenderId: "826039854836",
  appId: "1:826039854836:web:695eb5f5502f547a69e0a1",
  measurementId: "G-4WDMPQZZ48"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await FIREBASE_AUTH.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
