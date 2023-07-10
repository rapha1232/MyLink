import Head from "next/head";
import AppTitle from "~/components/AppTitle";
import LinkItem from "~/components/LinkItem";
import { FC, useEffect, useState } from "react";
import { auth, firestore } from "~/firebase";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFortAwesome,
  faGoogle,
  faInstagram,
  faSnapchat,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Register the Font Awesome icon in your main component or a separate initialization file
library.add(faCoffee);

interface MainPageProps {
  photoURL: string | undefined;
  alt: string;
  userName: string | null;
}

const MainPage: FC<MainPageProps> = ({ photoURL, alt, userName }) => {
  const [linkData, setLinkData] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "links"),
        where("userId", "==", auth.currentUser?.uid)
      ),
      (snapshot) => {
        const linksData = snapshot.docs.map((doc) => doc.data());
        setLinkData(linksData);
      }
    );

    return () => unsubscribe();
  }, [firestore]);

  const linkURLs = linkData.map((link) => link.linkUrl);

  const getFontAwesomeIcon = (iconName: string): IconProp => {
    switch (iconName.toLowerCase()) {
      case "fagoogle":
        return faGoogle;
      case "fafacebook":
        return faFacebook;
      case "fainstagram":
        return faInstagram;
      case "fatwitter":
        return faTwitter;
      case "fasnapchat":
        return faSnapchat;
      case "fatiktok":
        return faTiktok;
      default:
        return faFortAwesome; // Default icon to be used if the icon name is not recognized
    }
  };

  return (
    <>
      <Head>
        <title>{userName}'s Links</title>
        <meta name="description" content="Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#3df337] to-[#b01beb]">
        <div className="mt-8 flex h-fit w-5/6 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#d7dee4] to-[#d4c4c4]">
          <AppTitle userName={userName} photoURL={photoURL}/>
          {linkData.map((link: any, idx: number) => {
            const icon: IconProp = getFontAwesomeIcon(link.linkIcon);
            return (
              <LinkItem
                key={idx}
                linkName={link.linkName}
                linkIcon={icon}
                linkUrl={link.linkUrl}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default MainPage;
