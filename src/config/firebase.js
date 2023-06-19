// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqm-CTGgiZ_E_UTGCDSJXwEbK4pYlkK0g",
  authDomain: "tiktok---jornada-dev-eba-2ec17.firebaseapp.com",
  projectId: "tiktok---jornada-dev-eba-2ec17",
  storageBucket: "tiktok---jornada-dev-eba-2ec17.appspot.com",
  messagingSenderId: "900497509847",
  appId: "1:900497509847:web:51d94147c55249b5748f92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;