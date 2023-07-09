import Head from "next/head";
import AppTitle from "~/components/AppTitle";
import LinkItem from "~/components/LinkItem";
import ProfilePicture from "./ProfilePicture";
import { FC, useEffect, useState } from "react";
import { auth,firestore } from "~/firebase";
import { collection, addDoc, onSnapshot, where, query } from "firebase/firestore";
interface MainPageProps {
  photoURL: string | undefined;
  alt: string;
}

const MainPage: FC<MainPageProps> = ({photoURL, alt}) => {
  const [links, setLinks] = useState<any[]>([]);
  const [linkURL, setLinkURLs] = useState<string[]>([]);

  useEffect(() => {
    const q = query(collection(firestore, "links"), where("userId", "==", auth.currentUser?.uid));

    const getLinks = onSnapshot(q, (snapshot) => {
      const linksData = snapshot.docs.map((doc) => doc.data());
      const linkURLs = linksData.map((url) => url.linkUrl);
      setLinkURLs(linkURLs);
    });

    return () => getLinks();
  }, [firestore]);

  
  return (
    <>
      <Head>
        <title>User's Links</title>
        <meta name="description" content="Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#3df337] to-[#b01beb]">
        <div className="mt-8 flex h-fit w-2/4 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#d7dee4] to-[#d4c4c4]">
          <AppTitle />
          <ProfilePicture photoURL={photoURL} alt={alt} />
          {linkURL.map((link, idx) => (
            <LinkItem key={idx} write={link} />
          ))}
        </div>
      </main>
    </>
  );
};

export default MainPage;
