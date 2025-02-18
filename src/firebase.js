// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products t
// hat you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ8CERuDT8xwLMXpS4yR57w1-LpuDG5X4",
  authDomain: "godogosave.firebaseapp.com",
  projectId: "godogosave",
  storageBucket: "godogosave.firebasestorage.app",
  messagingSenderId: "723558423027",
  appId: "1:723558423027:web:1545137e6fc9cd98995a86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, setDoc, doc, getDoc };
export default app