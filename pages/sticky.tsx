import React from "react";

type Props = {};
const Sticky: React.FC<Props> = ({}) => {
  return (
    <main className="w-screen h-screen bg-gray-100 flex justify-center">
      <div className="p-10 space-y-10 max-w-3xl">
        <div className="bg-green-100 rounded-xl p-10 h-[20rem] overflow-auto">
          <div className="">
            <h1 className="sticky top-0 bg-green-300 p-3 font-bold text-green-600 rounded-xl text-xl">
              Sticky Heading1
            </h1>
            <p className="py-4 font-bold text-green-500">
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
              lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
              mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
              facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
              egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
              ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui
              quis est pulvinar ullamcorper. Nulla facilisi.
            </p>
          </div>
          <div className="">
            <h1 className="sticky top-0 bg-green-300 p-3 font-bold text-green-600 rounded-xl text-xl">
              Sticky Heading2
            </h1>{" "}
            <p className="py-4 font-bold text-green-500">
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
              lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
              mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
              facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
              egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
              ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui
              quis est pulvinar ullamcorper. Nulla facilisi.
            </p>
          </div>

          <div className="">
            <h1 className="sticky top-0 bg-green-300 p-3 font-bold text-green-600 rounded-xl text-xl">
              Sticky Heading3
            </h1>
            <p className="py-4 font-bold text-green-500">
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
              lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
              mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
              facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
              egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
              ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui
              quis est pulvinar ullamcorper. Nulla facilisi.
            </p>
          </div>
        </div>

        <div className="bg-yellow-200 rounded-xl h-[20rem] overflow-auto border-4 border-yellow-300">
          <div className="flex items-center space-x-3 h-5 m-5">
            <span className="rounded-full w-3 h-3 bg-yellow-400" />
            <span className="rounded-full w-3 h-3 bg-yellow-400" />
            <span className="rounded-full w-3 h-3 bg-yellow-400" />
            <span className="rounded-sm h-7 w-10 bg-yellow-100 flex-grow" />
          </div>
          {/* IMPORTANCE!! */}
          <div className="relative">
            <div className="flex items-center h-14 bg-yellow-300 absolute top-0">
              <p className="pl-5 text-xl text-yellow-600">Fixed child</p>
            </div>
            <div className="m-5">
              <h1 className="text-xl pl-2 text-yellow-600">Scroll me!</h1>

              <p className="py-4 font-bold text-yellow-700">
                Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                sem, at interdum magna augue eget diam. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed
                non quam. In vel mi sit amet augue congue elementum. Morbi in
                ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra
                nec, blandit vel, egestas et, augue. Vestibulum tincidunt
                malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
                mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
                facilisi. Quisque cursus, metus vitae pharetra auctor, sem massa
                mattis sem, at interdum magna augue eget diam. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed
                non quam. In vel mi sit amet augue congue elementum. Morbi in
                ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra
                nec, blandit vel, egestas et, augue. Vestibulum tincidunt
                malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
                mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
                facilisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sticky;
