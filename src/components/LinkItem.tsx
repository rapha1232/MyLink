import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FC } from "react";

interface LinkItemProps {
  linkName: string;
  linkUrl: string;
  linkIcon: IconProp;
}

const LinkItem: FC<LinkItemProps> = ({ linkName, linkUrl, linkIcon }) => {
  return (
    <a
      href={linkUrl}
      className="mb-3 flex w-11/12 max-w-7xl items-center rounded-2xl bg-gray-400 p-1 transition-all hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex w-full text-center justify-center items-center">
        <div className="h-1/12 m-2 w-1/12">
          {linkIcon && <FontAwesomeIcon className="" icon={linkIcon} />}
        </div>
        <h2 className="m-1 -ml-12 flex w-full items-center justify-center text-4xl font-semibold text-gray-700">
          {linkName}
        </h2>
      </div>
    </a>
  );
};

export default LinkItem;
