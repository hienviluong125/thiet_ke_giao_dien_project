import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import CourseCard from "../CourseCard";

const LearningScreen = (props) => {
  return (
    <ScrollView style={styles.center}>
      <View style={styles.container}>
        <CourseCard {...props} />
        <CourseCard {...props} />
        <CourseCard {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default LearningScreen;
