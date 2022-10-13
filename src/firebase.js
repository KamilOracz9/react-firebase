import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOXU2jK_P8c2JtWESMl0zVrs5FOBgKBX4",
  authDomain: "react-firebase-80b9c.firebaseapp.com",
  projectId: "react-firebase-80b9c",
  storageBucket: "react-firebase-80b9c.appspot.com",
  messagingSenderId: "999478747489",
  appId: "1:999478747489:web:e81b8a0744ca148d10e520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);