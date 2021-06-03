import React, { useRef } from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

type Props = {};
export const InputBox: React.FC<Props> = ({}) => {
  const [session] = useSession();
  const inputElem = useRef<HTMLInputElement>(null!);
  return (
    // shadow-md で影つく
    <div className="rounded-xl bg-white shadow-md font-medium">
      <div className="flex items-center space-x-4 p-4">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            height={40}
            width={40}
            layout="fixed"
            className="rounded-full"
          />
        )}
        {session?.user?.image && (
          <Image
            src={session.user.image}
            height={40}
            width={40}
            layout="fixed"
            className="rounded-full"
          />
        )}
        {/*flex: 1 1 0%; ⇔ flex-grow: 1, flex-shrink: 1, flex-basis: 0%  */}
        <form className="flex flex-1">
          <input
            className="rounded-full outline-none bg-gray-100 h-12 px-5 flex-grow"
            type={"text"}
            placeholder={`${session?.user?.name}さん、その気持ち、シェアしよう`}
            ref={inputElem}
          />
          <button
            hidden
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(inputElem.current.value);
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex items-center justify-evenly p-3 mx-3 border-t-2">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-full" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            ライブ動画
          </p>
        </div>
        <div className="inputIcon">
          <PhotographIcon className="text-green-500 h-full" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            写真・動画
          </p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="text-yellow-300 h-full" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            気分・アクティビティ
          </p>
        </div>
      </div>
    </div>
  );
};
