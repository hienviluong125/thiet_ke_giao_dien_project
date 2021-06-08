import React from "react";
import { TextInput, ScrollView, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Modal,
  Portal,
  FAB,
  RadioButton,
  Button,
  DefaultTheme,
  ThemeProvider as PaperProvider,
} from "react-native-paper";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
const result = [
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },

  { status: "correct" },
  { status: "incorrect" },
  { status: "correct" },
  { status: "correct" },

  { status: "correct" },
  { status: "inactive" },
  { status: "correct" },
  { status: "correct" },

  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
];

const bgEnum = {
  correct: "#B2DFDB",
  incorrect: "#BB1010",
  inactive: "rgba(33, 33, 33, 0.1)",
};

const colorEnum = {
  correct: "#000000",
  incorrect: "#fff",
  inactive: "#000000",
};

const QuizResult = ({ navigation, route }) => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#004640",
      accent: "#f1c40f",
    },
  };

  function navigateToAnswerScreen(idx) {
    navigation.navigate("QuizAnswer", { quizLession: "Nguyên tử", qIdx: idx });
  }

  return (
    <PaperProvider theme={theme}>
      <ScrollView
        style={{ backgroundColor: "#ffffff", height: "100%", display: "flex" }}
      >
        <View style={styles.breadcum}>
          <Text style={styles.breadcumText}>Bài tập</Text>

          <Icon name="chevron-right" style={styles.chevronIcon} />

          <Text style={styles.breadcumText}>Kết quả</Text>

          <Icon name="chevron-right" style={styles.chevronIcon} />

          <Text style={[styles.breadcumText, styles.activeBreadcumText]}>
            {route.params.quizLession.length > 30
              ? route.params.quizLession.substring(0, 27) + "..."
              : route.params.quizLession}
          </Text>
        </View>

        <View style={styles.mainSection}>
          <View
            style={{
              backgroundColor: "#B2DFDB",
              borderColor: "#B2DFDB",
              paddingHorizontal: 10,
              paddingVertical: 15,
              fontWeight: "500",
              borderRadius: 4,
              borderWidth: 0,
              marginBottom: 15,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Số câu đúng: 14/16</Text>
          </View>

          <View
            style={{
              backgroundColor: "rgba(33, 33, 33, 0.1)",
              borderColor: "rgba(33, 33, 33, 0.1)",
              paddingHorizontal: 10,
              paddingVertical: 15,
              fontWeight: "500",
              borderRadius: 4,
              borderWidth: 0,
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 20 }}>Số câu bỏ qua: 1/16</Text>
          </View>

          <View
            style={{
              backgroundColor: "#BB1010",
              borderColor: "#BB1010",
              paddingHorizontal: 10,
              paddingVertical: 15,
              fontWeight: "500",
              borderRadius: 4,
              borderWidth: 0,
              marginBottom: 15,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Số câu sai: 1/16
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "#000",
                textAlign: "right",
                fontSize: 18,
                fontWeight: "500",
                marginBottom: 15,
              }}
            >
              Đã làm vào 19:30 ngày 7/6/2021
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#004d40",
              padding: 10,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              borderBottomWidth: 0,
            }}
          >
            {result.slice(0, 7).map((elm, idx) => (
              <View
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: bgEnum[elm.status],
                  borderRadius: 46 / 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  onPress={() => navigateToAnswerScreen(idx)}
                  style={{ fontSize: 18, color: colorEnum[elm.status] }}
                >
                  {idx + 1}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: "#004d40",
              padding: 10,
            }}
          >
            {result.slice(7, 14).map((elm, idx) => (
              <View
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: bgEnum[elm.status],
                  borderRadius: 46 / 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  onPress={() => navigateToAnswerScreen(idx + 7)}
                  style={{ fontSize: 18, color: colorEnum[elm.status] }}
                >
                  {idx + 8}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 0,
              borderWidth: 1,
              borderColor: "#004d40",
              padding: 10,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              borderTopWidth: 0,
            }}
          >
            {result.slice(14, 16).map((elm, idx) => (
              <View
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: bgEnum[elm.status],
                  borderRadius: 46 / 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  onPress={() => navigateToAnswerScreen(idx + 14)}
                  style={{ fontSize: 18, color: colorEnum[elm.status] }}
                >
                  {idx + 15}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
              borderWidth: 1,
              borderColor: "#004640",
              padding: 10,
              borderRadius: 4,
            }}
          >
            <MaterialIcons name="info" color="#004640" size={20} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 17,
                fontWeight: "500",
                color: "#004640",
              }}
            >
              Bạn phải đạt >= 80% mới hoàn thành bài tập
            </Text>
          </View>
          <Button
            style={{ marginBottom: 20, backgroundColor: "#004640" }}
            labelStyle={{ fontSize: 19, color: "#fff" }}
            onPress={() =>
              navigation.navigate("Quiz", { quizLession: "Nguyên tử" })
            }
          >
            Làm lại
          </Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  breadcum: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    margin: 10,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "rgba(33, 33, 33, 0.08)",
  },

  breadcumText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 18,
  },

  activeBreadcumText: {
    color: "rgb(0, 0, 0)",
  },

  chevronIcon: {
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.2)",
    marginTop: 4,
    marginHorizontal: 10,
  },

  mainSection: {
    width: "100%",
    paddingHorizontal: 10,
  },

  mainCard: {
    // fontSize: "18px",
    // border
    borderWidth: 1,
    borderRadius: 4,
  },
});

// "rgba(33, 33, 33, 0.1)"
// "#B2DFDB"

export default QuizResult;
