import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NestedScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Nested Screen Example</Text>
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

export default NestedScreen;
