import React from "react";
import { Text, View, StyleSheet } from "react-native";

const LearningScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Learning Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LearningScreen;
