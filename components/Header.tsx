import React from "react";
import Image from "next/image";
import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HeaderIcon } from "./HeaderIcon";

type Props = {};
export const Header: React.FC<Props> = () => {
  return (
    <div className="flex items-center shadow-md bg-white sticky top-0 z-50 p-2 lg:px-5">
      {/*  Left */}
      <div className="flex">
        <Image
          src={"https://links.papareact.com/5me"}
          width={40}
          height={40}
          layout={"fixed"}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-grey-500"
            type={"text"}
            placeholder={"Search Facebook"}
          />
        </div>
      </div>
      {/*  Center */}
      <div className="flex justify-center flex-grow flex-shrink">
        {/* @media @-規則は、コードの最上位に配置したり、
        他の条件付きグループ @-規則の中に入れ子にして配置したりすることができます。 */}
        {/* @media (min-width: 768px )	*/}
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/*  Right */}
      <div>Right</div>
    </div>
  );
};
