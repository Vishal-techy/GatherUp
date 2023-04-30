// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL-eJrrLVleefHgplvQ3QRJdjlpays7i4",
  authDomain: "eventmanagement-86fe8.firebaseapp.com",
  projectId: "eventmanagement-86fe8",
  storageBucket: "eventmanagement-86fe8.appspot.com",
  messagingSenderId: "960519529348",
  appId: "1:960519529348:web:2d1fe3c0f2fb4362fa73d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()   