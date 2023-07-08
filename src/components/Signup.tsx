import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import auth from "~/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FormEvent, useState } from "react";
import Head from "next/head";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Login from "./Login";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUpClick = () => {
    setShowLogin(true);
  };

  const emailAndPassSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((error) => console.log(error));
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => console.log("logged in with google"))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Head>
        <title>SignUp</title>
        <meta name="description" content="SignUp" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      {showLogin ? (
        <SignUp />
      ) : (
        <div className="min-w-screen min-h-screen bg-[#080710]">
          <div className="absolute inset-1/2 h-80 w-72 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="absolute left-[-80px] top-[-80px] h-52 w-52 rounded-full bg-gradient-to-br from-[#3df337] to-[#2dce28]"></div>
            <div className="absolute bottom-[-80px] right-[-30px] h-52 w-52 rounded-full bg-gradient-to-r from-[#b01beb] to-[#9417c5]"></div>
          </div>
          <form
            className="absolute inset-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl border-2 border-opacity-10 bg-white bg-opacity-10 px-10 py-4 shadow-lg backdrop-blur-lg"
            onSubmit={emailAndPassSignUp}
          >
            <h3 className="mb-2 text-2xl font-semibold text-white">Sign Up</h3>
            <label htmlFor="userName" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="userName"
              placeholder="Email"
              className="mt-2 block h-12 w-full rounded-md bg-white/20 bg-opacity-10 px-2 text-lg font-light placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="passWord" className="mt-6 text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              id="passWord"
              placeholder="Password"
              className="mt-2 block h-12 w-full rounded-md bg-white/20 bg-opacity-10 px-2 text-lg font-light placeholder-gray-400"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
            <button className="mt-6 w-full cursor-pointer rounded-md bg-white py-2 text-lg font-semibold text-black">
              Sign Up
            </button>
            <div className="mt-6">
              <div
                className="bg-opacity-27 w-50 hover:bg-opacity-47 flex cursor-pointer items-center justify-center rounded-md bg-white/40 px-2 py-1 text-white"
                onClick={googleSignIn}
              >
                <div className="w-1/5">
                  <FontAwesomeIcon icon={faGoogle} className="mr-4" />
                </div>
                Sign in with Google
              </div>
            </div>
            <p className="text-white">
              Already have an account?{" "}
              <button
                onClick={() => setShowLogin(true)}
                className="text-blue-400 underline focus:outline-none"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      )}
    </>
  );
}
