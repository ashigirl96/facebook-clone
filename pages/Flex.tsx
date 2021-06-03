import { CheckCircleIcon, LockClosedIcon } from "@heroicons/react/outline";

type Props = {};
const Flex: React.FC<Props> = ({}) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl">Example of Flex-Grow</h1>
      <div className="flex items-center p-8 space-x-4">
        {/* noneは固定になる */}
        <div className="flex-none w-32 h-16">
          <div className="bg-purple-100 rounded-xl flex justify-center py-4">
            <LockClosedIcon className="w-12" />
          </div>
        </div>
        {/* growは可変になる */}
        <div className="flex-grow h-16">
          <div className="bg-purple-300 rounded-xl flex justify-center py-4">
            <CheckCircleIcon className="w-12" />
          </div>
        </div>
        <div className="flex-none w-32 h-16">
          <div className="bg-purple-100 rounded-xl flex justify-center py-4">
            <LockClosedIcon className="w-12" />
          </div>
        </div>
      </div>

      <div className="flex p-8 space-x-4">
        <div className="flex-grow w-16 h-16">
          <div className="bg-green-100 rounded-xl flex justify-center py-4">
            <CheckCircleIcon className="w-12" />
          </div>
        </div>
        <div className="flex-none w-32 h-16">
          <div className="bg-green-300 rounded-xl flex justify-center py-4">
            <LockClosedIcon className="w-12" />
          </div>
        </div>
        <div className="flex-grow w-16 h-16">
          <div className="bg-green-100 rounded-xl flex justify-center py-4">
            <CheckCircleIcon className="w-12" />
          </div>
        </div>
      </div>

      <h1 className="text-2xl">Example of Flex-Shrink</h1>

      <div className="flex p-8 space-x-4">
        {/* noneは固定になる */}
        <div className="flex-grow w-16 h-16">
          <div className="bg-yellow-100 rounded-xl flex justify-center py-4">
            <LockClosedIcon className="w-12" />
          </div>
        </div>
        {/* growは可変になる */}
        <div className="flex-shrink w-64 h-16">
          <div className="bg-yellow-300 rounded-xl flex justify-center py-4">
            <CheckCircleIcon className="w-12" />
          </div>
        </div>
        <div className="flex-grow w-16 h-16">
          <div className="bg-yellow-100 rounded-xl flex justify-center py-4">
            <LockClosedIcon className="w-12" />
          </div>
        </div>
      </div>

      <h1 className="text-2xl">Example of Flex-1</h1>

      <div className="flex p-8 space-x-4">
        {/* noneは固定になる */}
        {/* display:inlineの場合、widthやheightは設定することができません。 */}
        {/*
         width:100%の要素に、paddingとborderを設定すると、
         その分トータルの横幅が広がり、親要素からはみ出してしまいます。
        */}
        {/*
         widthやheightが効かない場合、スペル間違いでなければ、
         displayの値がinlineになっていることが原因であることが多いです。
         */}
        <div className="flex-1 w-16 h-32">
          <div className="bg-pink-300 rounded-xl flex justify-center py-4 font-bold text-white">
            Short
          </div>
        </div>
        {/* growは可変になる */}
        <div className="flex-1 w-16 h-32">
          <div className="bg-pink-300 rounded-xl flex justify-center py-4 font-bold text-white">
            Medium Length
          </div>
        </div>
        <div className="flex-1 w-16 h-32">
          <div className="bg-pink-300 rounded-xl flex justify-center py-4 font-bold text-white">
            Significantly Larger amount of content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
