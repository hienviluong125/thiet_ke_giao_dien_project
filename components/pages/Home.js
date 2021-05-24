import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Nested Screen"
        onPress={() => navigation.navigate("Nested")}
      />
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

export default HomeScreen;
