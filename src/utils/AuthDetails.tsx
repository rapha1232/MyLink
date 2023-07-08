import { User, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Login from "~/components/Login";
import MainPage from "~/components/mainPage";
import auth from "~/firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed Out"))
      .catch((error) => console.log(error));
  };
  return (
    <>
      {authUser ? (
        <>
          <MainPage /> <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <Login />
      )}{" "}
    </>
  );
};

export default AuthDetails;
