// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC92dBEpSmV6JgTRYTqhReEyIFXVCrMJsQ",
  authDomain: "myapp-56fae.firebaseapp.com",
  projectId: "myapp-56fae",
  storageBucket: "myapp-56fae.firebasestorage.app",
  messagingSenderId: "693004134018",
  appId: "1:693004134018:web:0b445d71aded3808e3769b",
  measurementId: "G-Y13KD9ML1Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
