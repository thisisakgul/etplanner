// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwWUXEqweYGoAgjf3qj6dauvYqzVz4nug",
  authDomain: "takipkargom.firebaseapp.com",
  projectId: "takipkargom",
  storageBucket: "takipkargom.appspot.com",
  messagingSenderId: "969924913682",
  appId: "1:969924913682:web:0b0b7f0e316461f0dc06cb",
  measurementId: "G-941JZFGVEM"
};

console.log("⚛️ Firebase config:", firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("⚛️ Firebase auth initialized:", auth);

export { auth };
