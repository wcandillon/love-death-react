import { View, StyleSheet } from "react-native";

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
    alignItems: "center",
    justifyContent: "center",
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
  return (
    <View style={{ flex: 1 }}>
      <Background />
      <View style={[styles.footer]}>
        <View
          style={{
            transform: [
              {
                scale: 2,
              },
            ],
          }}
        >
          <Circle darkMode={false} />
        </View>
        <View
          style={{
            margin: 200,
            transform: [
              {
                scale: 2,
              },
            ],
          }}
        >
          <Circle darkMode={false} />
        </View>
        <View
          style={{
            transform: [
              {
                scale: 2,
              },
            ],
          }}
        >
          <Circle darkMode={false} />
        </View>
      </View>
    </View>
  );
};

export default Dots;
