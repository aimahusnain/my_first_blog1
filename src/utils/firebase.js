// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-images-and-etc.firebaseapp.com",
  projectId: "blog-images-and-etc",
  storageBucket: "blog-images-and-etc.appspot.com",
  messagingSenderId: "929437449885",
  appId: "1:929437449885:web:56a697f55ebf17b6f59e74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 