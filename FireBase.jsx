
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUYSwuDZ1okt0IKUoew2GQRmDDYtTXCk",
  authDomain: "test-9a3ea.firebaseapp.com",
  projectId: "test-9a3ea",
  storageBucket: "test-9a3ea.appspot.com",
  messagingSenderId: "892831370253",
  appId: "1:892831370253:web:dd47511dc01f7fff619944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);