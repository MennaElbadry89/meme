import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMoEkutDnX0L2dNMcs8I40xqGD4eS7O8M",
  authDomain: "meme-store89.firebaseapp.com",
  projectId: "meme-store89",
  storageBucket: "meme-store89.firebasestorage.app",
  messagingSenderId: "20157357513",
  appId: "1:20157357513:web:64b65522f8cb7a374cdc18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app)