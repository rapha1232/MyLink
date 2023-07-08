import React from "react";

interface LinkItemProps {
  write: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ write }) => {
  return (
    <div className="m-1 h-full w-3/4 rounded-2xl border-white bg-[#176B87] text-center font-serif text-4xl font-extrabold text-black">
      {write}
    </div>
  );
};

export default LinkItem;
