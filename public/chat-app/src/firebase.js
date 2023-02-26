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
  apiKey: "AIzaSyAXLQgDIByZVc9nZcq24DsClZSGF_cGwk0",
  authDomain: "chat-app-13d13.firebaseapp.com",
  projectId: "chat-app-13d13",
  storageBucket: "chat-app-13d13.appspot.com",
  messagingSenderId: "46044753936",
  appId: "1:46044753936:web:77ece6977d8ab96ebbda95",
  measurementId: "G-JX6STBNSP2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore()
 