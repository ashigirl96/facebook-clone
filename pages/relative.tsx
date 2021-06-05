import Image from "next/image";

type Props = {};
const Relative: React.FC<Props> = ({}) => {
  return (
    <div className="space-y-10">
      <div className="relative bg-gray-600 h-32">
        Relative parent
        <div className="bg-red-800">Absolute child</div>
      </div>

      <div className="relative bg-gray-600 h-32">
        Relative parent
        <div className="absolute bg-red-800">Absolute child</div>
      </div>

      <div className="relative bg-gray-600 h-32">
        Relative parent
        <div className="absolute bottom-0 left-0 bg-red-800">
          Absolute child
        </div>
      </div>

      <div className="relative bg-gray-600 h-32">
        Relative parent
        {/*fill: 画像は幅と高さの両方を親要素の寸法に合わせて引き伸ばされ、通常は objectFit プロパティとペアになります*/}
        <Image
          src="https://pbs.twimg.com/profile_banners/1039082126459564032/1536571715/600x200"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Relative;
