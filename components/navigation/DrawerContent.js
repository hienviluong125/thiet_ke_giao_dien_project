import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Drawer } from "react-native-paper";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

const MENU_ITEMS = [
  {
    icon: <MaterialCommunityIcons name="account-box" color="gray" size={24} />,
    label: "Hồ sơ cá nhân",
  },
  {
    icon: <Ionicons name="document-text" color="gray" size={24} />,
    label: "Quản lý học tập",
  },
  {
    icon: <MaterialIcons name="quick-contacts-mail" color="gray" size={24} />,
    label: "Phản hồi ứng dụng",
  },
  {
    icon: <Ionicons name="settings-sharp" color="gray" size={24} />,
    label: "Cài đặt",
  },
  {
    icon: <AntDesign name="questioncircleo" color="gray" size={24} />,
    label: "Trợ giúp",
  },
  {
    icon: <AntDesign name="questioncircleo" color="gray" size={24} />,
    label: "Về ứng dụng",
  },
];

const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
            }}
            size={50}
          />
          <Title style={styles.title}>Dawid Urbaniak</Title>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => {
              return (
                <MaterialCommunityIcons name="home" color="gray" size={24} />
              );
            }}
            label="Trang chủ"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
          {MENU_ITEMS.map((item, index) => {
            return (
              <DrawerItem
                key={index}
                icon={() => item.icon}
                label={item.label}
                onPress={() => {
                  navigation.navigate("ManageLearn");
                }}
              />
            );
          })}
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
