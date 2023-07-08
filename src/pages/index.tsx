import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import firebase from "firebase/app";
import auth from "~/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import Login from "~/components/Login";
import MainPage from "~/components/mainPage";
import AuthDetails from "~/utils/AuthDetails";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <AuthDetails />
    </>
  );
}
