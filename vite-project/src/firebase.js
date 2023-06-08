// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAl0mfm0qXuVGCHMRFOYeXw_gcZv9A4o0",
  authDomain: "housing-react-clone.firebaseapp.com",
  projectId: "housing-react-clone",
  storageBucket: "housing-react-clone.appspot.com",
  messagingSenderId: "266614423510",
  appId: "1:266614423510:web:85178c55a496bd7f8dae77",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
