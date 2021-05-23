import { Easing, interpolate } from "remotion";

import { Extrapolate } from "../components/Redash";

interface RectProps {
  darkMode: boolean;
  progress?: number;
}

const Circle = ({ progress, darkMode }: RectProps) => {
  return (
    <svg
      width={238 * 2}
      height={140}
      viewBox={[0, 0, 238 * 2, 140].join(" ")}
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#prefix__filter0_dd)">
        <rect
          x={4}
          y={5}
          width={interpolate(progress || 0, [0, 0.5, 1], [230, 230 * 2, 230], {
            ...Extrapolate.CLAMP,
          })}
          height={130}
          rx={50}
          fill={darkMode ? "#929895" : "black"}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dd"
          x={0}
          y={0}
          width={238 * 2}
          height={140}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0.184314 0 0 0 0 0.501961 0 0 0 0 0.929412 0 0 0 1 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Circle;
