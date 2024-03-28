import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCG7SFgmrp4ugf3rl6aKhgmyvX9JbeLDO8",
  authDomain: "anime-prime-e9e70.firebaseapp.com",
  projectId: "anime-prime-e9e70",
  storageBucket: "anime-prime-e9e70.appspot.com",
  messagingSenderId: "174907415736",
  appId: "1:174907415736:web:8973f00ed6c49baf32284d"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
