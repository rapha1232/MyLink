import { StaticImageData } from "next/image";
import { FC } from "react";
interface ProfilePictureProps {
  photoURL?: string | null;
  alt: string;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ photoURL, alt }) => {
    return photoURL ? <img src={photoURL} alt={alt} className="mb-6 rounded-full w-1/6 hover:scale-[110%] transition-all"/> : null;
};

export default ProfilePicture;
