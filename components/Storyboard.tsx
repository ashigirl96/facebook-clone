import React from "react";
import { StoryCard } from "./StoryCard";

const stories = [
  {
    name: "名取さな",
    src: "https://yt3.ggpht.com/rA6gP29MBR1Q_pdlxaMj4gXhCTw5VZ05oJ4-y1miPb_BBmwUJnrnYk7bvGe-5aknm8mN9uSEZaFJBA=s640-nd",
    profile:
      "https://yt3.ggpht.com/ytc/AAUvwnj4WNbcHpbX1h5uZtJJhDkHBUNOouBBx0Rnz8kX=s48-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    name: "月ノ美兎",
    src: "https://pbs.twimg.com/profile_banners/958737597336928256/1599554576/600x200",
    profile:
      "https://yt3.ggpht.com/ytc/AAUvwngoahyu1HIZriwC5pRQRfLI9dHTvHP3xUyUtYtTgg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "周防パトラ ",
    src: "https://pbs.twimg.com/media/E2n78czVcAIrkdC?format=jpg&name=large",
    profile:
      "https://yt3.ggpht.com/ytc/AAUvwni3K3HvrlssJykNA7cE68zGcO4xZPF5k3XLE9sO=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "うんこ経済学者",
    src: "https://pbs.twimg.com/profile_banners/1039082126459564032/1536571715/600x200",
    profile:
      "https://yt3.ggpht.com/ytc/AAUvwnhGI2Xq0mRZoEZEpA7RvIrnwyLYpZgxTy0KzayYDw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "モイラ",
    src: "https://pbs.twimg.com/profile_banners/958632495196459009/1618130241/600x200",
    profile:
      "https://yt3.ggpht.com/ytc/AAUvwnhOkjEGVBpnfovWLobO65aprdxwZmFuV6KVyXsm=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "勇気ちひろ",
    profile:
      "https://yt3.ggpht.com/ytc/AAUvwnjYVr82yptL5I5o9_qUjRn3s4Hxks-4I7irHZHw=s88-c-k-c0x00ffffff-no-rj",
    src: "https://pbs.twimg.com/profile_banners/958767484902957056/1613728947/600x200",
  },
];

type Props = {};
export const Storyboard: React.FC<Props> = ({}) => {
  return (
    <div className="flex justify-start space-x-4 mx-auto overflow-x-auto">
      {stories.map(({ name, src, profile }) => {
        return <StoryCard name={name} src={src} profile={profile} />;
      })}
    </div>
  );
};
