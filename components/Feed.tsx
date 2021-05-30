import React from "react";
import { Storyboard } from "./Storyboard";
import { InputBox } from "./InputBox";
import { Posts } from "./Posts";

type Props = {};
export const Feed: React.FC<Props> = ({}) => {
  return (
    // overflow-y-auto ボックスに収まらない内容をどう表示するかは、ユーザーエージェントに依存する。内容が収まらない場合には、スクロールバーなどが表示される
    <div className="flex-grow h-screen pb-44 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Storyboard />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};
