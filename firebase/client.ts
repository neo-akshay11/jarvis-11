// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPqaU8cIcI4lLnqJAVDV_K21foZIg6IO0",
  authDomain: "jarvis-800dc.firebaseapp.com",
  projectId: "jarvis-800dc",
  storageBucket: "jarvis-800dc.firebasestorage.app",
  messagingSenderId: "806540190417",
  appId: "1:806540190417:web:8f4bedc21258131b14dbf0",
  measurementId: "G-RZC4SLKS72"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
