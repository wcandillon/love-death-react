import * as React from "react";

interface CircleProps {
  darkMode: boolean;
}

const Circle = ({ darkMode }: CircleProps) => {
  return (
    <svg
      width={132}
      height={134}
      viewBox="0 0 132 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#prefix__filter0_dd)">
        <circle cx={66} cy={67} r={62} fill={darkMode ? "#D8D1CA" : "black"} />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dd"
          x={0}
          y={0}
          width={132}
          height={134}
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
