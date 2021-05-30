import Image from "next/image";
import { signIn } from "next-auth/client";

export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-center bg-gray-50">
      <div className="mx-auto pb-3">
        <Image
          src="https://avatars.githubusercontent.com/u/29683674?s=400&u=2fcf4ae3ade891e7ce39750e7cd246f1d2dcae37&v=4"
          height={400}
          width={400}
          objectFit="contain"
          className="bg-blue-500 rounded-full"
        />
      </div>
      <h1 className="p-5 bg-neco rounded-full text-white mx-auto font-bold border-b-2 active:border-blue-500 cursor-pointer hover:text-gray-200">
        <div onClick={() => signIn()}>Login with Social Network...</div>
      </h1>
    </div>
  );
}
