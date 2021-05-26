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
    const unsubscribe = navigation.addListener('focus', (a, b, c) => {

      showModal()
    });

    return unsubscribe;
  }, [navigation]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', (e) => {
  //     console.log(e)
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  const [lessions, _] = useState([
    "Nguyên tử",
    "Bảng tuần hoàn nguyên tố hóa học",
    "Liên kết hóa học",
    "Phản ứng oxi hóa khử",
    "Nhóm Halogen",
    "Tốc độ phản ứng và sự cân bằng",
    "Đề tổng hợp 1",
    "Đề tổng hợp 2",
    "Đề tổng hợp 3",
    "Đề tổng hợp 4",
  ])

  return (
    <View style={{ backgroundColor: "#ffffff", height: "100%" }}>
      <Portal style={{padding:0, margin: 0}}>
        <Modal visible={visible} onDismiss={hideModal} style={{padding: 0, margin: 0}} contentContainerStyle={containerStyle}>
          <MaterialCommunityIcons name="check-circle-outline" style={{color: "#4CAF50", fontSize: 50, textAlign: 'center' }}/>
          <Text style={{fontSize: 18, textAlign: 'center', marginTop: 10,}}>Bạn đã  hoàn thành bài trắc nghiệm với số câu đúng là 8/10.</Text>
          <Button style={{backgroundColor: "#4CAF50", marginTop: 15 }} color="white" labelStyle={{fontSize: 17}} onPress={hideModal}>Xem kết quả</Button>
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
          lessions.map((lession, index) =>
          (
            <Card style={[styles.cardStyle, index == lessions.length - 1 ? { marginBottom: 20 } : {}]} key={index}>
              <Card.Content>
                {/* <Button onPress={() => navigation.navigate("Quiz", {quizLession: lession})} title={lession} color={'#fff'}> */}
                <Button color="#000" labelStyle={{fontSize: 16, fontWeight: 'bold'}} onPress={() => navigation.navigate("Quiz", {quizLession: lession})}>
                  {lession}
                </Button>
              </Card.Content>
            </Card>
          )
          )
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  breadcum: {
    width: "65%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    backgroundColor: "rgba(33, 33, 33, 0.08)"
  },

  breadcumText: {
    color: "rgba(0, 0, 0, 0.5)",
  },

  activeBreadcumText: {
    color: "rgb(0, 0, 0)",
  },

  chevronIcon: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: 4
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
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
  },

  // cardButton: {
  //   textAlign: 'left',
  //   color: '#00000',
  // }

  // center: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

export default QuizList;
