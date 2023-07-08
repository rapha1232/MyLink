import Head from "next/head";
import Link from "next/link";
import AppTitle from "~/components/AppTitle";
import LinkItem from "~/components/LinkItem";

export default function MainPage() {
  const texts: string[] = [
    "Hello World",
    "My Link App",
    "First Solo Test",
    "hjksagfuefh",
  ];
  return (
    <>
      <Head>
        <title>User's Links</title>
        <meta name="description" content="Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#001C30]">
        <AppTitle />
        <div className="mt-8 flex h-fit w-2/4 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#3df337] to-[#b01beb]">
          {texts.map((text, idx) => (
            <LinkItem key={idx} write={text} />
          ))}
        </div>
      </main>
    </>
  );
}
