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
import {
  ViewGridIcon,
  BellIcon,
  ChatIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";

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
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-grey-500 flex-shrink"
            type={"text"}
            placeholder={"Search Facebook"}
          />
        </div>
      </div>
      {/*  Center */}
      <div className="flex justify-center flex-grow">
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
      <div className="flex items-center sm:space-x-3 justify-end">
        {/*<div className="flex">*/}
        {/* Profile pic */}
        <p className="whitespace-nowrap font-semibold pr-3 flex-shrink">
          Reon Nishimura
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDoubleDownIcon className="icon" />
      </div>
    </div>
  );
};
