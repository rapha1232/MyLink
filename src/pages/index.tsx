import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';  
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Login from "~/components/Login";
import MainPage from "~/components/mainPage";

firebase.initializeApp({
  apiKey: "AIzaSyA4EdapEFS6os6S_u7bi-H73PwvFexZAoA",
  authDomain: "link-tree-642c0.firebaseapp.com",
  projectId: "link-tree-642c0",
  storageBucket: "link-tree-642c0.appspot.com",
  messagingSenderId: "194022498167",
  appId: "1:194022498167:web:a11ce01de771e37a840b72"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
export default function Home() {
  const [user] = useAuthState(auth);
  return (
    {user ? <MainPage/> : <Login/>}
  );
}

