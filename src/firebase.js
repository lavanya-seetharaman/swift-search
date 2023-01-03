import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtq9wo4ymTop9COe3jOBxcKbhn68OMPLM",
  authDomain: "raccacoony-f43d2.firebaseapp.com",
  projectId: "raccacoony-f43d2",
  storageBucket: "raccacoony-f43d2.appspot.com",
  messagingSenderId: "687678085619",
  appId: "1:687678085619:web:b20ce7527b84b73975da86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();