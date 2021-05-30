import React, { HTMLAttributes } from "react";

type Props<T> = {
  Icon: React.FC<HTMLAttributes<T>>;
  active?: boolean;
};
export const HeaderIcon: React.FC<Props<any>> = ({ Icon, active }) => {
  return (
    <div className={`${active && "border-b-[3px] border-blue-500"}`}>
      <div
        className="flex items-center cursor-pointer
    md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl
    active:border-b-2 active:border-blue-500
    group
    "
      >
        <Icon
          className={`h-7 sm:h-9 text-grey-500 group-hover:text-blue-500 ${
            active && "text-blue-500"
          }`}
        />
      </div>
    </div>
  );
};
