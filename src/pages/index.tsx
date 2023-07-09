import Head from "next/head";
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
