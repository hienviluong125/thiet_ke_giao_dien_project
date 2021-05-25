import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Card } from "react-native-paper";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";

const ManageLearnScreen = ({ navigation }) => {
  const iconProps = {
    color: "#004640",
    size: 80,
  };

  return (
    <View style={styles.center}>
      <View style={styles.container}>
        <Card style={styles.item}>
          <Card.Content>
            <AntDesign name="barschart" {...iconProps} />
            <Text style={styles.title}>Thống kê</Text>
          </Card.Content>
        </Card>
        <Card style={styles.item}>
          <Card.Content>
            <AntDesign name="eye" {...iconProps} />
            <Text style={styles.title}>Đã xem</Text>
          </Card.Content>
        </Card>
        <Card
          style={styles.item}
          onPress={() => {
            navigation.navigate("Learning");
          }}
        >
          <Card.Content>
            <FontAwesome5 name="book-open" {...iconProps} />
            <Text style={styles.title}>Học tập</Text>
          </Card.Content>
        </Card>
        <Card style={styles.item}>
          <Card.Content>
            <Ionicons name="heart-outline" {...iconProps} />
            <Text style={styles.title}>Yêu thích</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "48%",
    height: 160,
    marginBottom: 20,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    textAlign: "center",
    color: "#004640",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ManageLearnScreen;
