// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6V1S58wTywJxW37QQ0XyudTMdR_cisQo",
  authDomain: "lms-ujianspd.firebaseapp.com",
  projectId: "lms-ujianspd",
  storageBucket: "lms-ujianspd.firebasestorage.app",
  messagingSenderId: "973979372849",
  appId: "1:973979372849:web:f9ca084bafca64985af410",
  measurementId: "G-XZTLVR1VMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);