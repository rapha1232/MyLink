import { FC } from "react";

interface UserNameProps{
  userName: string | null;
}
const AppTitle: FC<UserNameProps> = ({userName}) => {
  return (
    <h1 className="m-5 self-center top text-center font-serif text-6xl text-[#4e4e4e]">
      {userName}'s Link App
    </h1>
  );
}

export default AppTitle;