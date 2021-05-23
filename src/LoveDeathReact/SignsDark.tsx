/* eslint-disable max-len */
import { View } from "react-native";
import { interpolate, useCurrentFrame } from "remotion";

import { Extrapolate } from "../components/Redash";

import ReactLogo from "./ReactLogo";

const SignsDark = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 18], [0, 1], Extrapolate.CLAMP);
  const stroke = interpolate(frame, [0, 6], [5, 40], Extrapolate.CLAMP);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <svg
        width="490"
        height="490"
        viewBox="0 0 490 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M163.182 165L95 245.114L163.182 328.636M326.818 328.636L395 248.523L326.818 165"
          stroke="white"
          stroke-width={stroke}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <ReactLogo progress={progress} stroke={stroke / 2} />
      <svg
        width="490"
        height="490"
        viewBox="0 0 490 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M272.273 136L217.727 354.182M95 243.386L163.182 163.273L95 243.386ZM95 243.386L163.182 326.909L95 243.386ZM395 246.795L326.818 326.909L395 246.795ZM395 246.795L326.818 163.273L395 246.795Z"
          stroke="white"
          stroke-width={stroke}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </View>
  );
};

export default SignsDark;
