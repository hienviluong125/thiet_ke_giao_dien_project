import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Title } from "react-native-paper";

const CourseDocument = () => {
  return (
    <ScrollView>
      <View style={[styles.center, styles.headerContainer]}>
        <Title>Chương 1: Nguyên Tử</Title>
        <Text style={[styles.textCenter, styles.textStyle]}>
          Bài 2: Hạt nhân nguyên tử - Nguyên tố hóa học - Đồng vị
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textStyle}>
          {`A. Tóm tắt trọng tâm lý thuyết Hóa 10 bài 2 \nI. Hạt nhân nguyên tử\n\n1. Điện tích hạt nhân\n\nNếu hạt nhân nguyên tử có Z hạt proton thì điện tích hạt nhân là Z+ và số đơn vị diện tích hạt nhân là Z. \n\nSố đơn vị diện tích hạt nhân = số p = số e = Z\n\n2.Số khối\n\nSố khối của hạt nhân (A) bằng tổng số proton (Z) và tổng số notron (N)\n\nCông thức: A = Z +N\nII. Nguyên tố hóa học\n\n1.Định nghĩa \n\nNguyên tố hóa học là những nguyên tố có cùng điện tích hạt nhân (cùng số proton, số electron)\n\nVí dụ: Tất cả các nguyên tử có cùng số đơn vị điện tích hạt nhân là 12 đều là nguyên tố Magie\n\n.`}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
  },
  textCenter: {
    textAlign: "center",
  },
  headerContainer: {
    paddingVertical: 10,

    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  contentContainer: {
    padding: 10,
  },
});

export default CourseDocument;
