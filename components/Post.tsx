import { VFC } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import Image from "next/image";

type Props = {
  post: QueryDocumentSnapshot;
};
export const Post: VFC<Props> = ({ post }) => {
  const data = post.data();
  const { name, message, timestamp, image, postImage } = data;
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white shadow-md rounded-xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-600">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
    </div>
  );
};
