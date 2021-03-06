import { useSession } from "next-auth/client";
import { SidebarRow } from "./SidebarRow";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};
export const Sidebar: React.FC<Props> = ({}) => {
  const [session, isLoading] = useSession();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    // 要素の最大幅を設定します。これは width プロパティの使用値が、 max-width で指定した値を上回ることを防ぎます
    // 画面が786px以上のときは、最低限300px
    <div className="p-2 hidden md:flex md:flex-col md:max-w-[400px] md:flex-grow sticky top-0">
      <SidebarRow
        src={session?.user?.image}
        title={session?.user?.name || ""}
      />
      <SidebarRow title="Friends" Icon={UsersIcon} />
      <SidebarRow title="Groups" Icon={UserGroupIcon} />
      <SidebarRow title="Marketplace" Icon={ShoppingBagIcon} />
      <SidebarRow title="Watch" Icon={DesktopComputerIcon} />
      <SidebarRow title="Events" Icon={CalendarIcon} />
      <SidebarRow title="Memories" Icon={ClockIcon} />
      <SidebarRow title="See More" Icon={ChevronDownIcon} />
    </div>
  );
};
