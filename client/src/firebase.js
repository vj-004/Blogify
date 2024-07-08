// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogify-96c35.firebaseapp.com",
  projectId: "blogify-96c35",
  storageBucket: "blogify-96c35.appspot.com",
  messagingSenderId: "1067954911229",
  appId: "1:1067954911229:web:0fd3d5ffec7cd3e38ecb94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

