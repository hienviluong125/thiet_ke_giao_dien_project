import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import RoundCheckbox from "rn-round-checkbox";

const LESSON_DATA = [
  {
    id: 1,
    title: "Bài 1: Thành phần nguyên tử",
    isDone: true,
    videoTime: "20 phút",
    course: "1",
  },
  {
    id: 2,
    title: "Bài 2: Hạt nhân nguyên tử",
    isDone: false,
    videoTime: "25 phút",
    course: "1",
  },
  {
    id: 3,
    title: "Bài 3: Cấu tạo vỏ nguyên tử",
    isDone: false,
    videoTime: "25 phút",
    course: "1",
  },
];

const Row = ({ lesson, onPress }) => {
  const { id, title, isDone, videoTime, course } = lesson;

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
          <Text
            style={styles.subRow}
          >{`Chương: ${course} - Video: ${videoTime}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListCourses = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              {LESSON_DATA.map((lesson, index) => {
                return (
                  <Row
                    key={index}
                    lesson={lesson}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                );
              })}
            </ScrollView>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Đóng danh sách</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Button
        icon="format-list-bulleted"
        mode="contained"
        onPress={() => setModalVisible(true)}
      >
        Xem danh sách bài học
      </Button>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const COLOR_THEME = "#004640";
const baseTextStyle = {
  color: COLOR_THEME,
  fontSize: 20,
  fontWeight: "600",
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 14,
    padding: 30,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: (windowWidth * 94) / 100,
  },
  button: {
    borderRadius: 14,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: 4,
    backgroundColor: "gray",
  },
  textStyle: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  rowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 14,
    marginBottom: 10,

    borderBottomColor: "gainsboro",
    borderBottomWidth: 1.5,
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

export default ListCourses;
