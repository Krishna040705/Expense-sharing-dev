// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyACL5zNS_o0gppWSGyMHXZIJFLvEdOIeyU",
  authDomain: "expenses-sharing-website.firebaseapp.com",
  projectId: "expenses-sharing-website",
  storageBucket: "expenses-sharing-website.firebasestorage.app",
  messagingSenderId: "895853995240",
  appId: "1:895853995240:web:2d63657bdb79a782af955d",
  measurementId: "G-JCHMRMZY4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
