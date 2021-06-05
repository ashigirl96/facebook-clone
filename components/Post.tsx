import { FormEvent, useCallback, useState, VFC } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import Image from "next/image";
import {
  CameraIcon,
  ChatAlt2Icon,
  EmojiHappyIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/client";

const Feedback: VFC<{}> = ({}) => {
  return (
    <div className="border-b-2 border-t-2 border-gray-300 flex justify-around p-1">
      <div className="flex flex-grow justify-center rounded-md items-center space-x-2 cursor-pointer hover:bg-gray-200 p-1">
        <ThumbUpIcon height={24} width={24} />
        <div className="font-bold text-gray-500 text-lg">いいね！</div>
      </div>
      <div className="flex flex-grow justify-center rounded-md items-center space-x-2 cursor-pointer hover:bg-gray-200 p-1">
        <ChatAlt2Icon height={24} width={24} />
        <div className="font-bold text-gray-500 text-lg">コメントする</div>
      </div>
    </div>
  );
};

const CommentInputBox: VFC<{}> = ({}) => {
  const [session] = useSession();
  const image = session?.user?.image;
  const [comment, setComment] = useState("");
  const inputComment = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setComment(e.currentTarget.value);
    },
    [comment]
  );
  return (
    <div className="flex items-center flex-grow">
      {image && (
        <Image src={image} height={40} width={40} className="rounded-full" />
      )}
      <form className="relative flex-1">
        <div className="flex justify-between ml-2 items-center rounded-full bg-gray-100 p-2">
          <input
            className="flex-grow ml-2 items-center bg-transparent outline-none placeholder-grey-600 flex-shrink text-xl"
            type={"text"}
            placeholder="コメントする…"
            onInput={inputComment}
          />
          <button
            className="hidden"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(`comment: ${comment}`);
            }}
          />
          <div className="mr-3 flex space-x-2">
            <EmojiHappyIcon height={24} className="text-gray-500" />
            <CameraIcon height={24} className="text-gray-500" />
          </div>
        </div>
        <div className="absolute left-3 text-sm font-medium">
          Enterキーで投稿します。
        </div>
      </form>
    </div>
  );
};

// const Comment: VFC<{}> = ({}) => {
//   const [session] = useSession();
//   const image = session?.user?.image;
//   return (
//     <div className="flex">
//       {image && (
//         <Image src={image} height={40} width={40} className="rounded-full" />
//       )}
//     </div>
//   );
// };

type Props = {
  post: QueryDocumentSnapshot;
};
export const Post: VFC<Props> = ({ post }) => {
  const data = post.data();
  const { name, message, timestamp, image, postImage } = data;
  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl">
      <div className="p-5">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={60}
            height={60}
            alt=""
          />
          <div>
            <p className="font-bold text-xl">{name}</p>
            <p className="text-md text-gray-600">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4 text-2xl">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="mb-5 mx-5 pb-3 space-y-4">
        <Feedback />
        {/*<Comment />*/}
        <CommentInputBox />
      </div>
    </div>
  );
};
