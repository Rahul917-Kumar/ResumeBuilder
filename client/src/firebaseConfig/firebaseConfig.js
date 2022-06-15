// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from'@firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUDeAt42pyU5168ea15YGEJFHT7hCVRjk",
  authDomain: "resumebui.firebaseapp.com",
  projectId: "resumebui",
  storageBucket: "resumebui.appspot.com",
  messagingSenderId: "829328583293",
  appId: "1:829328583293:web:901b7bcddaa8cbb6969f14",
  measurementId: "G-28ZQFDCSZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db =  getFirestore(app)

export {app , db , auth}
