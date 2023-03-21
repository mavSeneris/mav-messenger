// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9h-EfEi8UQG8mADV9rRnAl55Xtkqao_o",
  authDomain: "mav-messenger-6fce7.firebaseapp.com",
  projectId: "mav-messenger-6fce7",
  storageBucket: "mav-messenger-6fce7.appspot.com",
  messagingSenderId: "163082363576",
  appId: "1:163082363576:web:851efd450845021cc0ca4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
