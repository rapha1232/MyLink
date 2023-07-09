import { FC } from "react";

interface ProfilePictureProps {
  photoURL?: string | null;
  alt: string;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ photoURL, alt }) => {
    return photoURL ? <img src={photoURL} alt={alt} className="mb-2 rounded-full w-20"/> : null;
};

export default ProfilePicture;
