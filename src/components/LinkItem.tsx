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
      className="flex items-center p-1 rounded-2xl hover:scale-105 transition-all bg-gray-400 mb-3 max-w-3xl w-11/12"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex text-center w-full">
      <div className="w-1/12 h-1/12 m-2">
          {linkIcon && (
            <FontAwesomeIcon
            className=""
              icon={linkIcon}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full min-w-fit text-gray-700 text-4xl m-1 -ml-12">
          {linkName}
        </h2>
      </div>
    </a>
  );
};

export default LinkItem;
