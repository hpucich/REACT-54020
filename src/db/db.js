import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDznLzYjnH15T4Eglsb-I3pZuGxz05x8M",
  authDomain: "ecommerce-hap.firebaseapp.com",
  projectId: "ecommerce-hap",
  storageBucket: "ecommerce-hap.appspot.com",
  messagingSenderId: "1062541588642",
  appId: "1:1062541588642:web:6b2a1a8ce219d4c43a3ffb"
};

initializeApp(firebaseConfig);
const db  = getFirestore();

export default db