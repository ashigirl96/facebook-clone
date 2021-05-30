import Image from "next/image";

export function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://avatars.githubusercontent.com/u/29683674?s=400&u=2fcf4ae3ade891e7ce39750e7cd246f1d2dcae37&v=4"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1 className="p-5 bg-neco rounded-full text-white">
        Login with Social Network...
      </h1>
    </div>
  );
}
