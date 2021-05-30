import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  src: string;
  profile: string;
};
export const StoryCard: React.FC<Props> = ({ name, src, profile }) => {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:min-w-[8rem] cursor-pointer
    overflow-x-auto transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse
    "
    >
      <Image
        className="absolute opacity-5 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        height={40}
        width={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
};
