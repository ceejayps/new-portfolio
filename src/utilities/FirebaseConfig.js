// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN1cRQB6E2LeHfCYvX14CxslCGW2NraDI",
  authDomain: "mywebsite-256a3.firebaseapp.com",
  projectId: "mywebsite-256a3",
  storageBucket: "mywebsite-256a3.appspot.com",
  messagingSenderId: "591566109594",
  appId: "1:591566109594:web:47714b99d5bba1d4fbd823"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}