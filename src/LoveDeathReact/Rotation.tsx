import { View } from "react-native";
import { interpolate, useCurrentFrame } from "remotion";

import { Extrapolate } from "../components/Redash";

import Heart from "./Icons/Heart";
import Robot from "./Icons/Robot";
import X from "./Icons/X";

const Rotation = () => {
  const frame = useCurrentFrame();
  const rotate = interpolate(frame, [0, 10], [0, 45], Extrapolate.CLAMP);
  const translateY = interpolate(frame, [0, 10], [0, 350], Extrapolate.CLAMP);
  const scale = interpolate(frame, [10, 17], [1, 0.75], Extrapolate.CLAMP);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 400,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View style={{ transform: [{ translateY }] }}>
          <Heart />
        </View>
        <View style={{ transform: [{ scale }, { rotate: `${rotate}deg` }] }}>
          <X />
        </View>
        <View style={{ transform: [{ translateY }] }}>
          <Robot />
        </View>
      </View>
    </View>
  );
};

export default Rotation;
