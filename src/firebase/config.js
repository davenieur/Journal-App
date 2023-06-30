// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnviroments } from "../helpers";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnviroments();

// Your web app's Firebase configuration

// Dev/Prod
// const firebaseConfig = {
  // apiKey: "AIzaSyC6isxMZJBLq84MbYrRfXhBtd7Zy3lp-DY",
  // authDomain: "react-cursos-6f62e.firebaseapp.com",
  // projectId: "react-cursos-6f62e",
  // storageBucket: "react-cursos-6f62e.appspot.com",
  // messagingSenderId: "976311024786",
  // appId: "1:976311024786:web:ab1cd35ac0538292823a4b"
// };


const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );