import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4EdapEFS6os6S_u7bi-H73PwvFexZAoA",
  authDomain: "link-tree-642c0.firebaseapp.com",
  projectId: "link-tree-642c0",
  storageBucket: "link-tree-642c0.appspot.com",
  messagingSenderId: "194022498167",
  appId: "1:194022498167:web:a11ce01de771e37a840b72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore};
