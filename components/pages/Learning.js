import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import CourseCard from "../CourseCard";

const COURSE_DATA = [
  {
    title: "Hóa học 10",
    progress: 0.3,
    price: 0,
  },
  {
    title: "Toán học 10",
    progress: 0.5,
    price: "100.000",
  },
  {
    title: "Lý 10",
    progress: 0.3,
    price: "50.000",
  },
];

const LearningScreen = (props) => {
  return (
    <ScrollView style={styles.center}>
      <View style={styles.container}>
        {COURSE_DATA.map((course, index) => {
          return <CourseCard key={index} {...props} course={course} />;
        })}
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
