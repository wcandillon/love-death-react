import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundImage: "radial-gradient(#F0E6E0 61%, #8B918D);",
    filter: "blur(40px)",
  },
});

const Background = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#8B918D" }} />
      <View style={styles.container} />
    </View>
  );
};

export default Background;
