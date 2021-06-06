type Props = {};
const Fixed: React.FC<Props> = ({}) => {
  return (
    <main className="w-screen h-[20rem] bg-gray-100 overflow-auto">
      <div>
        <p className="pl-5 text-xl text-yellow-600 w-screen fixed relative">
          Fixed child
        </p>

        <div className="m-5 bg-yellow-200 absolute overflow-auto">
          <h1 className="text-xl pl-2 text-yellow-600">Scroll me!</h1>

          <p className="py-4 font-bold text-yellow-700">
            Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
            at interdum magna augue eget diam. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
            lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
            mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
            facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
            egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
            ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis
            est pulvinar ullamcorper. Nulla facilisi. Quisque cursus, metus
            vitae pharetra auctor, sem massa mattis sem, at interdum magna augue
            eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
            blandit dolor. Sed non quam. In vel mi sit amet augue congue
            elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
            lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
            tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit
            amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
            facilisi. Quisque cursus, metus vitae pharetra auctor, sem massa
            mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In
            vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
            facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
            egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
            ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis
            est pulvinar ullamcorper. Nulla facilisi. Quisque cursus, metus
            vitae pharetra auctor, sem massa mattis sem, at interdum magna augue
            eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
            blandit dolor. Sed non quam. In vel mi sit amet augue congue
            elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
            lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
            tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit
            amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
            facilisi.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Fixed;
