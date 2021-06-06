import React, { useCallback, useRef, VFC } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import Image from "next/image";
import {
  CameraIcon,
  ChatAlt2Icon,
  EmojiHappyIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/client";
import firebase from "firebase";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

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

type CommentInputBoxProps = {
  postId: string;
};
const CommentInputBox: VFC<CommentInputBoxProps> = ({ postId }) => {
  const [session] = useSession();
  const image = session?.user?.image;
  const commentRef = useRef<HTMLInputElement>(null!);
  const postComment = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (commentRef.current.value === "") return;

      const data = {
        message: commentRef.current.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        postId,
      };

      await db
        .collection("comment")
        .add(data)
        .then(() => {
          commentRef.current.value = "";
        });
    },
    [commentRef]
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
            ref={commentRef}
          />
          <button className="hidden" type="submit" onClick={postComment} />
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

const Comment: VFC<{ comment: QueryDocumentSnapshot }> = ({ comment }) => {
  const data = comment.data();
  const { name, message, image } = data;

  return (
    <div>
      <div className="flex items-center flex-grow">
        {image && (
          <Image src={image} height={40} width={40} className="rounded-full" />
        )}
        <div className="rounded-2xl bg-gray-200 ml-2 py-2 px-3">
          <p className="font-bold">{name}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const Comments: VFC<{ postId: string }> = ({ postId }) => {
  const [comments, isLoading, error] = useCollection(
    db
      .collection("comment")
      .where("postId", "==", postId)
      .orderBy("timestamp", "asc")
  );

  return (
    <div>
      {error && <span>{error.message}</span>}
      {isLoading && <p>isLoading...</p>}
      {!isLoading && comments && (
        <div className="space-y-3">
          {comments.docs.map((comment) => {
            return <Comment comment={comment} />;
          })}
        </div>
      )}
    </div>
  );
};

type Props = {
  post: QueryDocumentSnapshot;
};
export const Post: VFC<Props> = ({ post }) => {
  const data = post.data();
  const { name, message, timestamp, image, postImage } = data;
  console.log(`id: ${post.id}`);
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
        <Comments postId={post.id} />
        <CommentInputBox postId={post.id} />
      </div>
    </div>
  );
};
