import { View, StyleSheet } from "react-native";
import { Easing, interpolate, useCurrentFrame } from "remotion";

import Background from "./Background";
import Circle from "./Circle";
import Rect from "./Rect";
import Title from "./Title";

const styles = StyleSheet.create({
  footer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: 100,
    paddingHorizontal: 250,
  },
});

interface LoveDeathReactProps {
  still: boolean;
  darkMode: boolean;
  noTitle?: boolean;
}

const LoveDeathReact = ({ darkMode, still, noTitle }: LoveDeathReactProps) => {
  const currentFrame = useCurrentFrame();
  const opacity = darkMode
    ? interpolate(currentFrame, [0, 2 * 24], [1, 0], {
        easing: Easing.out(Easing.ease),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;
  return (
    <View style={{ flex: 1 }}>
      <Background />
      {darkMode ? (
        <View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black" }}
        />
      ) : null}
      <View style={styles.footer}>
        <Rect darkMode={darkMode} />
        <Circle darkMode={darkMode} />
        <Rect darkMode={darkMode} />
      </View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!noTitle && <Title darkMode={darkMode} still={still} />}
      </View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "black",
          opacity,
        }}
      />
    </View>
  );
};

export default LoveDeathReact;
