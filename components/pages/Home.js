import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import PopularCourses from "../carousels/PopularCourses";
import FeatureCourses from "../carousels/FeatureCourses";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.center}>
      <FeatureCourses />
      <PopularCourses label="Khóa học phổ biến" />
      <PopularCourses label="Khóa học mới" />
      <PopularCourses label="Mua nhiều trong tuần" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
