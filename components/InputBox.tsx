import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { db, storage } from "../firebase";
import firebase from "firebase";

type Props = {};
export const InputBox: React.FC<Props> = ({}) => {
  const [session] = useSession();
  const inputElem = useRef<HTMLInputElement>(null!);
  const imgPickerElem = useRef<HTMLInputElement>(null!);
  const [file, setFile] = useState<string | ArrayBuffer>(null!);

  const sendPost = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!inputElem.current.value) return;

      const data = {
        message: inputElem.current.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await db
        .collection("posts")
        .add(data)
        .then((doc) => {
          if (file) {
            const uploadTask = storage
              .ref(`posts/${doc.id}`)
              .putString(file.toString(), "data_url");
            removeImage();
            uploadTask.on(
              "state_change",
              null,
              (error) => console.error(error),
              () => {
                // when the upload completes
                storage
                  .ref(`posts`)
                  .child(doc.id)
                  .getDownloadURL()
                  .then((url) => {
                    db.collection("posts").doc(doc.id).set(
                      {
                        postImage: url,
                      },
                      { merge: true }
                    );
                  });
              }
            );
          }
        });
    },
    [file]
  );
  const sendImgPost = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      let reader = new FileReader();
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        reader.readAsDataURL(file);
      }
      reader.onload = (readerEvent) => {
        if (!readerEvent.target) {
          return;
        }
        if (readerEvent.target.result) {
          setFile(readerEvent.target.result);
        }
      };
    },
    []
  );

  const removeImage = useCallback(() => {
    setFile(null!);
  }, []);

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
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {file && (
          <div
            className="flex flex-col justify-center items-center filter hover:brightness-150 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <img src={file.toString()} alt="" className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">削除</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-evenly p-3 mx-3 border-t-2">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-full" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            ライブ動画
          </p>
        </div>
        <div
          className="inputIcon"
          onClick={() => {
            imgPickerElem.current.click();
          }}
        >
          <PhotographIcon className="text-green-500 h-full" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            写真・動画
          </p>
          <input
            ref={imgPickerElem}
            onChange={sendImgPost}
            type="file"
            hidden
          />
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
