import { FC } from "react";
import ProfilePicture from "./ProfilePicture";
import { auth } from "~/firebase";
import { StaticImageData } from "next/image";

interface AppTitleProps {
  userName: string | null;
  photoURL?: string | null;
}
const AppTitle: FC<AppTitleProps> = ({ userName }) => {
  return (
    <>
    <h1 className="m-5 self-center text-clip text-center font-serif text-6xl text-[#4e4e4e] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
      {userName}'s Link App
    </h1>
    <ProfilePicture photoURL={auth.currentUser?.photoURL} alt={"Profile"}/>
    </>
  );
};

export default AppTitle;
