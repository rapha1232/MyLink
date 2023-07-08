import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA4EdapEFS6os6S_u7bi-H73PwvFexZAoA",
  authDomain: "link-tree-642c0.firebaseapp.com",
  projectId: "link-tree-642c0",
  storageBucket: "link-tree-642c0.appspot.com",
  messagingSenderId: "194022498167",
  appId: "1:194022498167:web:a11ce01de771e37a840b72",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
export default function Login() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="min-w-screen min-h-screen bg-[#080710]">
        <div className="absolute inset-1/2 h-80 w-72 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="absolute left-[-80px] top-[-80px] h-52 w-52 rounded-full bg-gradient-to-br from-[#3df337] to-[#2dce28]"></div>
          <div className="absolute bottom-[-80px] right-[-30px] h-52 w-52 rounded-full bg-gradient-to-r from-[#b01beb] to-[#9417c5]"></div>
        </div>
        <form className="absolute inset-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl border-2 border-opacity-10 bg-white bg-opacity-10 px-10 py-4 shadow-lg backdrop-blur-lg">
          <h3 className="mb-2 text-2xl font-semibold text-white">Login Here</h3>
          <label htmlFor="userName" className="text-lg font-semibold">
            Username
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Email"
            className="mt-2 block h-12 w-full rounded-md bg-white/20 bg-opacity-10 px-2 text-lg font-light placeholder-gray-400"
          />
          <label htmlFor="passWord" className="mt-6 text-lg font-semibold">
            Password
          </label>
          <input
            type="password"
            id="passWord"
            placeholder="Password"
            className="mt-2 block h-12 w-full rounded-md bg-white/20 bg-opacity-10 px-2 text-lg font-light placeholder-gray-400"
          />
          <button className="mt-6 w-full cursor-pointer rounded-md bg-white py-2 text-lg font-semibold text-black">
            Sign Up
          </button>
          <div className="mt-6">
            <div
              className="bg-opacity-27 w-50 hover:bg-opacity-47 flex cursor-pointer items-center justify-center rounded-md bg-white/40 px-2 py-1 text-white"
              onClick={signInWithGoogle}
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-1" />
              Google
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};
