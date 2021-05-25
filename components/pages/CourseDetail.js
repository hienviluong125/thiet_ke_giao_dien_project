import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Title, Chip } from "react-native-paper";

import VideoPlayer from "../VideoPlayer";
import ListCourses from "../ListCourses";

const CourseDetailScreen = () => {
  return (
    <View style={styles.center}>
      <VideoPlayer />
      <View style={styles.contentContainer}>
        <Title style={styles.title}>Chương 1: Nguyên tử</Title>
        <Text style={styles.baseText}>
          Bài 2: Hạt nhân nguyên tử - Nguyên tố hóa học - Đồng vị
        </Text>
        <View style={styles.actionContainer}>
          <Text style={styles.baseText}>Nội dung: </Text>
          <TouchableOpacity onPress={() => console.log("Pressed")}>
            <Chip
              icon="file-document-outline"
              mode="outlined"
              style={styles.chip}
              textStyle={styles.baseText}
              selected={true}
            >
              Văn bản
            </Chip>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Pressed")}>
            <Chip
              icon="ab-testing"
              mode="outlined"
              style={styles.chip}
              textStyle={styles.baseText}
              selected={true}
            >
              Bài tập
            </Chip>
          </TouchableOpacity>
        </View>
      </View>
      <ListCourses />
    </View>
  );
};

const COLOR_THEME = "#004640";
const baseTextStyle = {
  color: COLOR_THEME,
  fontSize: 20,
  fontWeight: "600",
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "flex-start",
  },
  contentContainer: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    marginBottom: 16,

    color: COLOR_THEME,
    fontSize: 22,
    fontWeight: "bold",
  },
  baseText: baseTextStyle,
  actionContainer: {
    marginTop: 14,
  },
  chip: {
    borderColor: COLOR_THEME,
    borderWidth: 1.5,

    marginVertical: 10,
    padding: 4,
  },
});

export default CourseDetailScreen;
