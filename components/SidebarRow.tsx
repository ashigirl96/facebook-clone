import React, { HTMLAttributes } from "react";
import Image from "next/image";

type Props = {
  src?: string | null;
  Icon?: React.FC<HTMLAttributes<any>>;
  title: string;
};
export const SidebarRow: React.FC<Props> = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 py-2 cursor-pointer hover:bg-gray-200 rounded-xl">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      {/* 768pxより大きい場合にhiddenになる */}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};
