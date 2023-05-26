// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxqqndp_MEmhXq4lghOeappKKfnE3Qrj0",
  authDomain: "cric-db-7bb23.firebaseapp.com",
  projectId: "cric-db-7bb23",
  storageBucket: "cric-db-7bb23.appspot.com",
  messagingSenderId: "335759518207",
  appId: "1:335759518207:web:2853807007e1ae1dff9fca",
  measurementId: "G-FPK9PNCC2X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);