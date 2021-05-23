import { View } from "react-native";
import { Sequence, useVideoConfig } from "remotion";

import LoveDeathReact from "./LoveDeathReact";
import Dots from "./Dots";
import Dots2 from "./Dots2";
import SignsLight from "./SignsLight";
import SignsDark from "./SignsDark";
import LogoLight from "./LogoLight";
import Icons from "./Icons";
import Roulette from "./Roulette";
import Rotation from "./Rotation";
import MainTitle from "./MainTitle";

const Comp = () => {
  const { fps } = useVideoConfig();
  const cuts = [2 * fps, fps, fps + 4, 1, 19, 18, 19, 13, 40, 17, 102] as const;
  const from = (index: number) => cuts.slice(0, index).reduce((a, v) => a + v);
  return (
    <View style={{ flex: 1 }}>
      <Sequence from={0} durationInFrames={cuts[0]} name="Title Dark">
        <LoveDeathReact darkMode={true} still={true} />
      </Sequence>
      <Sequence from={from(1)} durationInFrames={cuts[1]} name="Title Light">
        <LoveDeathReact darkMode={false} still={false} />
      </Sequence>
      <Sequence from={from(2)} durationInFrames={cuts[2]} name="Dots">
        <Dots />
      </Sequence>
      <Sequence from={from(3)} durationInFrames={cuts[3]} name="Big Dots">
        <Dots2 />
      </Sequence>
      <Sequence from={from(4)} durationInFrames={cuts[4]} name="Signs Light">
        <SignsLight />
      </Sequence>
      <Sequence from={from(5)} durationInFrames={cuts[5]} name="Signs Dark">
        <SignsDark />
      </Sequence>
      <Sequence from={from(6)} durationInFrames={cuts[6]} name="Logo Light">
        <LogoLight />
      </Sequence>
      <Sequence from={from(7)} durationInFrames={cuts[7]} name="Logo Light">
        <Icons />
      </Sequence>
      <Sequence from={from(8)} durationInFrames={cuts[8]} name="Logo Light">
        <Roulette />
      </Sequence>
      <Sequence from={from(9)} durationInFrames={cuts[9]} name="Rotation">
        <Rotation />
      </Sequence>
      <Sequence from={from(10)} durationInFrames={cuts[10]} name="Rotation">
        <MainTitle />
      </Sequence>
    </View>
  );
};

export default Comp;
