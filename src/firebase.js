import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-G8zzk0p2XQDE_1UM36-VKRuEGC74iwc",
  authDomain: "kirttiraj-portfolio-61407.firebaseapp.com",
  projectId: "kirttiraj-portfolio-61407",
  storageBucket: "kirttiraj-portfolio-61407.appspot.com",
  messagingSenderId: "827333247367",
  appId: "1:827333247367:web:bd1bdff2b14d4dc1911322"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
