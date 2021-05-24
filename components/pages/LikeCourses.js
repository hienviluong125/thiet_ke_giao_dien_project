import React from "react";
import { Text, View, StyleSheet } from "react-native";

const LikeCoursesScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Like Courses Screen</Text>
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

export default LikeCoursesScreen;
