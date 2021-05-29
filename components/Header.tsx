import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

type Props = {};
export const Header: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="text-6xl">Header</h1>

      {/*  Left */}
      <div className="flex">
        <Image
          src={"https://links.papareact.com/5me"}
          width={40}
          height={40}
          layout={"fixed"}
        />
      </div>
      {/*  Center */}
      <div className="flex ml-2 items-center rounded-full">
        <input type={"text"} placeholder={"Search Facebook"} />
        <SearchIcon className="h-6 text-gray-600" />
      </div>

      {/*  Right */}
    </div>
  );
};
