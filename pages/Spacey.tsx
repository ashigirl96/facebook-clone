import { VFC } from "react";

type Props = {};
const Spacey: VFC<Props> = ({}) => {
  return (
    <div className="bg-gray-200">
      <div className="space-y-3 bg-gray-300 m-2 inline-flex flex-col">
        <div className="bg-green-500 h-32 w-12" />
        <div className="bg-green-400 h-24" />
        <div className="bg-green-600 h-12" />
      </div>
      <div className="font-medium bg-danger text-red-500">a</div>
    </div>
  );
};

export default Spacey;
