// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage,} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXxyU5Rdu-ohaNLxWODayKM-sNsws1hAs",
  authDomain: "testing-2f461.firebaseapp.com",
  projectId: "testing-2f461",
  storageBucket: "testing-2f461.appspot.com",
  messagingSenderId: "659056491965",
  appId: "1:659056491965:web:8f9e518e5e2fb8fbf166d4",
  measurementId: "G-G4GZG4B7T9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore()
 