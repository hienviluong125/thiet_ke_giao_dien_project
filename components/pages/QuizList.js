import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Portal, Modal, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { useState } from "react";
import { useEffect } from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

const QuizList = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  function showModal() { setVisible(true); }
  function hideModal() { setVisible(false); }

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20
  };

  useEffect(() => {
    if (route.params && route.params.receiveResult) {
      showModal()
    }
  }, [route]);

  const [lessions, _] = useState([
    {
      name: "Bài tập chương 01: Nguyên tử",
      done: 14,
      total: 16,
    },
    {
      name: "Bài tập chương 02: Bảng tuần hoàn nguyên tố hóa học",
      done: 8,
      total: 16,
    },
    {
      name: "Bài tập chương 03: Liên kết hóa học",
      done: 0,
      total: 16,
    },
    {
      name: "Bài tập chương 04: Phản ứng oxi hóa khử",
      done: 0,
      total: 16,
    },
    {
      name: "Bài tập chương 05: Nhóm Halogen",
      done: 0,
      total: 16,
    },
    {
      name: "Bài tập chương 06: Tốc độ phản ứng và sự cân bằng",
      done: 0,
      total: 16,
    },
    {
      name: "Bài tập tổng hợp 1",
      done: 0,
      total: 16,
    },
    {
      name: "Bài tập tổng hợp 2",
      done: 0,
      total: 16,
    },
    {
      name: "Bài tập tổng hợp 3",
      done: 0,
      total: 16,
    },
    {
      name: "Bài tập tổng hợp 4",
      done: 0,
      total: 16,
    },
  ])

  return (
    <View style={{ backgroundColor: "#ffffff", height: "100%" }}>
      <Portal style={{ padding: 0, margin: 0 }}>
        <Modal visible={visible} onDismiss={hideModal} style={{ padding: 0, margin: 0 }} contentContainerStyle={containerStyle}>
          <MaterialCommunityIcons name="check-circle-outline" style={{ color: "#4CAF50", fontSize: 50, textAlign: 'center' }} />
          <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10, }}>Bạn đã  hoàn thành bài trắc nghiệm với số câu đúng là 14/16.</Text>
          <Button style={{ backgroundColor: "#4CAF50", marginTop: 15 }} color="white" labelStyle={{ fontSize: 17 }} onPress={hideModal} onPress={() => {navigation.navigate("QuizResult", {quizLession: "Nguyên tử"}); setVisible(false) }}>Xem kết quả</Button>
        </Modal>
      </Portal>

      <View style={styles.breadcum}>
        <Text style={styles.breadcumText}>
          Bài học
        </Text>

        <Icon name="chevron-right" style={styles.chevronIcon} />

        <Text style={styles.breadcumText}>
          Hóa học 10
        </Text>

        <Icon name="chevron-right" style={styles.chevronIcon} />

        <Text style={[styles.breadcumText, styles.activeBreadcumText]}>
          Trắc nghiệm
        </Text>
      </View>

      <ScrollView style={styles.items}>
        {
          lessions.map((lession, index) => (
            <Card style={[styles.cardStyle, index === lessions.length - 1 ? {marginBottom: 20} : {}]} onPress={() => navigation.navigate("Quiz", {quizLession: lession.name})}>
              <Card.Content>
                <View style={styles.cardContentInfoWrapper}>
                  <Text style={styles.cardContentInfo}>{lession.name}</Text>
                </View>
                <View style={styles.cardContentProgressWrapper}>
                  <View style={styles.progressBarWrapper}>
                    <View style={[styles.activeProgressBar, , { width: `${lession.done/lession.total * 100}%` }]}></View>
                    <View style={[styles.nonActiveProgressBar, { width: `${(1 - lession.done/lession.total) * 100}%` }]}></View>
                  </View>
                  <View>
                    <Text style={{ fontWeight: '400' }}>{lession.done}/{lession.total}</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
    </View>
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
    backgroundColor: "rgba(33, 33, 33, 0.08)"
  },

  breadcumText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 18
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

  items: {
    // marginHorizontal: 10,
    paddingHorizontal: 10,
  },

  eachItem: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderWidth: 1,
    borderRadius: 4,
    height: 60,
    width: "100%",
    lineHeight: 60,
  },

  cardStyle: {
    marginTop: 20,
    width: '100%',
    shadowColor: "#000",
    borderLeftWidth: 4,
    borderLeftColor: "#004d04",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
  },

  cardContentInfo: {
    fontSize: 18,
    fontWeight: "600",
    color: '#004d04'
  },

  cardContentInfoWrapper: {
    borderBottomColor: '#004d04',
    paddingBottom: 15,
    borderBottomWidth: 1
  },

  activeProgressBar: {
    height: 5,
    backgroundColor: '#004d04'
  },

  nonActiveProgressBar: {
    height: 5,
    backgroundColor: "rgba(33, 33, 33, 0.1)"
  },

  progressBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: 15,
    width: "85%"
  },

  cardContentProgressWrapper: {
    paddingTop: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default QuizList;
