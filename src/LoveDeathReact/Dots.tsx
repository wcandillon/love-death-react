import { View, StyleSheet } from "react-native";
import { Easing, interpolate, useCurrentFrame } from "remotion";

import { Extrapolate } from "../components/Redash";

import Rect from "./Rect";
import Circle from "./Circle";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundImage: "radial-gradient(#F5E8E1 61%, #7A7F7A);",
    filter: "blur(40px)",
  },
  footer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: 100,
    paddingHorizontal: 250,
  },
});

const Background = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#7A7F7A" }} />
      <View style={styles.container} />
    </View>
  );
};

const Dots = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 22], [0, 1], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });

  const progress2 = interpolate(frame, [22, 25], [0, 1], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });
  const progress3 = interpolate(frame, [25, 28], [0, 1], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });
  const translateX = interpolate(progress, [0, 1], [0, 600], Extrapolate.CLAMP);
  const translateX2 = interpolate(
    progress3,
    [0, 1],
    [0, 100],
    Extrapolate.CLAMP
  );
  return (
    <View style={{ flex: 1 }}>
      <Background />
      <View
        style={[
          styles.footer,
          {
            transform: [
              {
                translateY: interpolate(
                  progress2,
                  [0, 1],
                  [0, -900],
                  Extrapolate.CLAMP
                ),
              },
            ],
          },
        ]}
      >
        <View
          style={{
            transform: [
              { translateX: translateX + translateX2 },
              { rotate: "180deg" },
            ],
          }}
        >
          <Rect darkMode={false} progress={progress} />
        </View>
        <View
          style={{
            transform: [
              {
                scale: interpolate(
                  progress3,
                  [0, 1],
                  [1, 1.5],
                  Extrapolate.CLAMP
                ),
              },
            ],
          }}
        >
          <Circle darkMode={false} />
        </View>
        <View
          style={{
            transform: [{ translateX: -translateX - translateX2 }],
          }}
        >
          <Rect darkMode={false} progress={progress} />
        </View>
      </View>
    </View>
  );
};

export default Dots;
