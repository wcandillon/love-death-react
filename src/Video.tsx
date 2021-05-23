import { Composition } from "remotion";

import LoveDeathReact from "./LoveDeathReact";

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="LoveDeathReact"
        component={LoveDeathReact}
        durationInFrames={14 * 24 + 21}
        fps={24}
        width={3840}
        height={2160}
      />
    </>
  );
};

/*

      <Composition
        id="AnimatableText"
        component={AnimatableText}
        durationInFrames={10}
        fps={30}
        width={3840}
        height={2160}
      />
      <Composition
        id="Animated"
        component={Animated}
        durationInFrames={30 * 10}
        fps={30}
        width={3840}
        height={2160}
      />
      */
