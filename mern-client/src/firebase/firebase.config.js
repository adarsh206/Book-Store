// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV3_d4FbuMeSM2GgcjBpwW9dn41lD7jvE",
  authDomain: "book-store-c5b64.firebaseapp.com",
  projectId: "book-store-c5b64",
  storageBucket: "book-store-c5b64.appspot.com",
  messagingSenderId: "264042536930",
  appId: "1:264042536930:web:06a2780f1ef6b9d6c4e3bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;