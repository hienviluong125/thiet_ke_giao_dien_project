import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const LearningScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Learning Screen</Text>
      <Button
        title="Go to Quiz List Screen"
        onPress={() => navigation.navigate("QuizList")}
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

export default LearningScreen;
