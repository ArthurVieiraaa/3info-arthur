// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs-KhtnEd8Pm1J01pxmCoJAVMmutMKGuU",
  authDomain: "info-arthur.firebaseapp.com",
  projectId: "info-arthur",
  storageBucket: "info-arthur.appspot.com",
  messagingSenderId: "94693296709",
  appId: "1:94693296709:web:8bfc75b9a0d67caa76712c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };