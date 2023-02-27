// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc4ya6sz9tK0dMAzhxAdFuhNJmWjM_n3c",
  authDomain: "react-login-auth-b2986.firebaseapp.com",
  projectId: "react-login-auth-b2986",
  storageBucket: "react-login-auth-b2986.appspot.com",
  messagingSenderId: "515726762257",
  appId: "1:515726762257:web:65a3c5594fe2142a402cb0",
  measurementId: "G-Y725NRG685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;