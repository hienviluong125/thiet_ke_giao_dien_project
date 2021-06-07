import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DropDownItem from "react-native-drop-down-item";
import RoundCheckbox from "rn-round-checkbox";

const LESSON_DATA = [
  {
    id: 1,
    title: "Bài 1: Thành phần nguyên tử",
    isDone: true,
    videoTime: "20 phút",
  },
  {
    id: 2,
    title: "Bài 2: Hạt nhân nguyên tử",
    isDone: false,
    videoTime: "25 phút",
  },
  {
    id: 3,
    title: "Bài 3: Cấu tạo vỏ nguyên tử",
    isDone: false,
    videoTime: "25 phút",
  },
];

const COURSE_DATA = [
  {
    title: "Chương 1: Nguyên tử",
    point: 15,
    maxPoint: 20,
    lessons: LESSON_DATA,
  },
  {
    title: "Chương 2: Liên kết hóa học",
    point: 20,
    maxPoint: 20,
    lessons: LESSON_DATA,
  },
  {
    title: "Chương 3: Phản ứng oxi hóa khử",
    point: 19,
    maxPoint: 20,
    lessons: LESSON_DATA,
  },
];

const Row = ({ lesson, onPress }) => {
  const { id, title, isDone, videoTime } = lesson;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rowContainer}>
        <View style={styles.checkBoxContainer}>
          <Text style={{ marginBottom: 4 }}>{`#${id}`}</Text>
          <RoundCheckbox
            size={24}
            checked={isDone}
            backgroundColor={COLOR_THEME}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleRow}>{title}</Text>
          <Text style={styles.subRow}>{`Video: ${videoTime}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListCourseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerTitle}>Danh Sách Bài Học</Text>
        {COURSE_DATA.map((course, i) => {
          return (
            <DropDownItem
              key={i}
              style={styles.dropDownItem}
              contentVisible={false}
              invisibleImage={require("../../assets/ic_arr_down.png")}
              visibleImage={require("../../assets/ic_arr_up.png")}
              header={
                <View style={styles.parentSection}>
                  <Text style={styles.title}>{course.title}</Text>
                  <Text style={styles.subTitle}>
                    Bài tập: {course.point}/{course.maxPoint}
                  </Text>
                </View>
              }
            >
              <View style={{ padding: 0, margin: 0 }}>
                {course.lessons.map((lesson, index) => {
                  return (
                    <Row
                      key={index}
                      lesson={lesson}
                      onPress={() => {
                        navigation.navigate("CourseDetail");
                      }}
                    />
                  );
                })}
              </View>
            </DropDownItem>
          );
        })}
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",

    marginBottom: 20,
  },
  title: {
    ...baseTextStyle,
    fontWeight: "bold",
    fontSize: 22,
  },
  subTitle: {
    ...baseTextStyle,
    fontSize: 18,
  },
  parentSection: {
    width: "100%",
    paddingBottom: 10,
    marginBottom: 10,

    borderBottomWidth: 0.5,
    borderBottomColor: COLOR_THEME,
  },
  rowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 14,
  },
  titleRow: {
    ...baseTextStyle,
    fontSize: 18,
    fontWeight: "bold",
  },
  checkBoxContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  titleContainer: {
    display: "flex",
    width: "86%",
  },
  subRow: { ...baseTextStyle, fontSize: 16 },
});

export default ListCourseScreen;
