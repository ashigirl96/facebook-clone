import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { Post } from "./Post";

type Props = {};
export const Posts: React.FC<Props> = ({}) => {
  const [realtimePosts, isLoading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {error && <span>{error.message}</span>}
      {isLoading && <p>isLoading...</p>}
      {!isLoading && realtimePosts && (
        <div className="space-y-5">
          {realtimePosts.docs.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
};
