import { View } from "react-native";
import { Easing, interpolate, useCurrentFrame } from "remotion";

import { Extrapolate } from "../components/Redash";

import Heart from "./Icons/Heart";
import Skull from "./Icons/Skull";
import Robot from "./Icons/Robot";
import Sadomazofembotochist from "./Icons/Sadomazofembotochist";
import Mute from "./Icons/Mute";
import Eye from "./Icons/Eye";
import Cat from "./Icons/Cat";
import Pyramid from "./Icons/Pyramid";
import Evil from "./Icons/Evil";
import Cyclop from "./Icons/Cyclop";
import Box from "./Icons/Box";
import X from "./Icons/X";

const Roulette = () => {
  const frame = useCurrentFrame();
  const marginVertical = 50;
  const translateY = interpolate(frame, [0, 35], [0, 12 * 300], {
    ...Extrapolate.CLAMP,
    easing: Easing.in(Easing.ease),
  });
  const translateY1 = interpolate(frame, [0, 40], [0, 8 * 300], {
    ...Extrapolate.CLAMP,
    easing: Easing.in(Easing.ease),
  });
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
          width: 300 * 3,
          height: 300 + marginVertical * 2,
          flexDirection: "row",
          flexWrap: "wrap-reverse",
          overflow: "hidden",
        }}
      >
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <Skull />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Robot />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <Sadomazofembotochist />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Sadomazofembotochist />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <Cyclop />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Mute />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <Pyramid />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Pyramid />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <Box />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Robot />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <Skull />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Cat />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <X />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Evil />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <X />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Eye />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <X />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Cyclop />
        </View>
        <View style={{ marginVertical }}>
          <Heart />
        </View>
        <View
          style={{ marginVertical, transform: [{ translateY: translateY1 }] }}
        >
          <X />
        </View>
        <View style={{ marginVertical, transform: [{ translateY }] }}>
          <Robot />
        </View>
      </View>
    </View>
  );
};

export default Roulette;
