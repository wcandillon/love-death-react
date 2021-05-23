import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const UHD = { width: 3840, height: 2160, aspectRatio: 16 / 9 };
export const HD = { width: 1280, height: 720, aspectRatio: 16 / 9 };

export const interpolateFontWeight = (
  progress: number,
  inputRange: number[],
  outputRange: string[]
) =>
  `${Math.round(
    interpolate(
      progress,
      inputRange,
      outputRange.map((w) => parseInt(w[0]!, 10))
    )
  )}00`;

export interface UseSpringParams {
  startInMs: number;
  currentFrame?: number;
}

export const useSpring = ({ startInMs, currentFrame }: UseSpringParams) => {
  const { fps } = useVideoConfig();
  const realFrame = useCurrentFrame();
  const frame = currentFrame ?? realFrame;
  const startInFrames = (fps * startInMs) / 1000;
  return spring({
    frame: frame - startInFrames,
    from: 0,
    to: 1,
    fps,
    config: {
      stiffness: 100,
      damping: 200,
    },
  });
};

export interface UseTimingParams {
  startInMs: number;
  durationInMs: number;
  currentFrame?: number;
}

export const useTiming = ({
  durationInMs,
  startInMs,
  currentFrame,
}: UseTimingParams) => {
  const { fps } = useVideoConfig();
  const realFrame = useCurrentFrame();
  const frame = currentFrame ?? realFrame;
  const startInFrames = (fps * startInMs) / 1000;
  const durationInFrames = (fps * durationInMs) / 1000;
  return interpolate(
    frame,
    [startInFrames, startInFrames + durationInFrames],
    [0, 1],
    { ...Extrapolate.CLAMP, easing: Easing.inOut(Easing.ease) }
  );
};

export interface UseLoopParams {
  durationInMs: number;
}

export const useLoop = ({ durationInMs }: UseLoopParams) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const durationInFrames = (fps * durationInMs) / 1000;
  const iteration = Math.floor(frame / durationInFrames);
  const progress = frame % durationInFrames;
  return interpolate(
    progress,
    [0, durationInFrames],
    iteration % 2 ? [0, 1] : [1, 0],
    { easing: Easing.inOut(Easing.ease) }
  );
};

export const Extrapolate = {
  CLAMP: {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  },
} as const;
