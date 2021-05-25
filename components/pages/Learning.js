import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, ProgressBar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Course = ({ navigation }) => {
  return (
    <Card
      style={styles.item}
      onPress={() => {
        navigation.navigate("CourseDetail");
      }}
    >
      <Card.Content>
        <Card.Title
          title="Hóa học 10"
          style={styles.titleContainer}
          titleStyle={styles.cardTitle}
          right={() => {
            return (
              <MaterialCommunityIcons
                name="dots-vertical"
                size={30}
                color="#004640"
              />
            );
          }}
        />
      </Card.Content>
      <Card.Cover source={{ uri: "https://loremflickr.com/g/320/240/paris" }} />
      <Card.Actions>
        <View style={styles.cardActionContainer}>
          <Avatar.Image
            size={70}
            source={{ uri: "https://loremflickr.com/320/240/dog" }}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.info}>Tác giả: Nguyễn Đình Bình</Text>
            <Text style={styles.info}>Giá: Miễn phí</Text>
          </View>
          <View style={styles.progressBar}>
            <ProgressBar progress={0.3} color="#004640" style={{ height: 8 }} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>30% hoàn thành</Text>
            <Text style={styles.info}>Đăng ký lúc: 05/05/2021</Text>
          </View>
        </View>
      </Card.Actions>
    </Card>
  );
};

const LearningScreen = (props) => {
  return (
    <ScrollView style={styles.center}>
      <View style={styles.container}>
        <Course {...props} />
        <Course {...props} />
        <Course {...props} />
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
  item: {
    width: "100%",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    padding: 0,
    margin: 0,
  },
  cardTitle: {
    color: "#004640",
    fontSize: 24,
    fontWeight: "600",
  },
  cardActionContainer: {
    width: "100%",
    paddingHorizontal: 10,

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    width: "74%",

    display: "flex",
    flexWrap: "wrap",
  },
  info: {
    fontSize: 18,
    color: "#004640",
  },
  progressBar: {
    width: "100%",
    marginTop: 30,
  },
  infoContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

export default LearningScreen;
