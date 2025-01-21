// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeO-4DDlyNRSbEe_nlu-98A1u27bkfH7g",
  authDomain: "tripplanner-e787d.firebaseapp.com",
  projectId: "tripplanner-e787d",
  storageBucket: "tripplanner-e787d.firebasestorage.app",
  messagingSenderId: "1024771573189",
  appId: "1:1024771573189:web:7d1cb7e7930ca4fce137ac",
  measurementId: "G-SCG5SPQ2P6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);