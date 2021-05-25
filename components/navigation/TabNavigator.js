import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import {
  MainStackNavigator,
  CategoryStackNavigator,
  LearningStackNavigator,
  NotificationStackNavigator,
  LikeCoursesStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const getTabBarLearningStackVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return routeName === "CourseDetail" ? false : true;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStackNavigator}
        options={{
          tabBarLabel: "Danh mục",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Learning"
        component={LearningStackNavigator}
        options={({ route }) => {
          return {
            tabBarLabel: "Học tập",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" color={color} size={size} />
            ),
            tabBarVisible: getTabBarLearningStackVisibility(route),
          };
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackNavigator}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-notifications-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LikeCourses"
        component={LikeCoursesStackNavigator}
        options={{
          tabBarLabel: "Yêu thích",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: "#004640",
    paddingBottom: 3,
    minHeight: 62,
  },
});

const tabBarOptions = {
  activeTintColor: "white",
  inactiveTintColor: "#b5b5b5",
  showIcon: "true", // Shows an icon for both iOS and Android
  labelStyle: {
    fontSize: 13,
  },
  style: styles.navigator,
};

export default BottomTabNavigator;
