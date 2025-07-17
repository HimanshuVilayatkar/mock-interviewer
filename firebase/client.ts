import { getApps, initializeApp, getApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB94z-rfO9b76jGcc_96pjmeIPux6dNct8",
  authDomain: "mock-interviewer-9ed48.firebaseapp.com",
  projectId: "mock-interviewer-9ed48",
  storageBucket: "mock-interviewer-9ed48.firebasestorage.app",
  messagingSenderId: "1095782132357",
  appId: "1:1095782132357:web:4678ca948c2c91097357ec",
  measurementId: "G-VLK0XGTLF8"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app)
export const db=getFirestore(app)