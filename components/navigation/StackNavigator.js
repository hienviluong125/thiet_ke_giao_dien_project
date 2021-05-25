import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { View } from "react-native";

// screens
import Home from "../pages/Home";
import Category from "../pages/Category";
import Learning from "../pages/Learning";
import Notification from "../pages/Notification";
import LikeCourses from "../pages/LikeCourses";
import NestedEx from "../pages/NestedEx";
import ManageLearn from "../pages/ManageLearn";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={screenOptions} />
      <Stack.Screen
        name="Nested"
        component={NestedEx}
        options={headerBaseStyle}
      />
    </Stack.Navigator>
  );
};

const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

const LearningStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Learning" component={Learning} />
    </Stack.Navigator>
  );
};

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

const LikeCoursesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="LikeCourses" component={LikeCourses} />
    </Stack.Navigator>
  );
};

const ManageLearnStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="ManageLearn"
        component={ManageLearn}
        options={{
          headerTitle: "Quản lý học tập",
        }}
      />
    </Stack.Navigator>
  );
};

const headerBaseStyle = {
  headerStyle: {
    backgroundColor: "#004640",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const screenOptions = ({ navigation }) => ({
  ...headerBaseStyle,
  headerTitle: "LEARN ANYWHERE",
  headerRight: () => (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <FontAwesome
        name="search"
        color="#b5b5b5"
        size={24}
        style={{ marginRight: 24 }}
      />

      <Entypo
        name="shopping-cart"
        color="#b5b5b5"
        size={24}
        style={{ marginRight: 20 }}
      />
    </View>
  ),
  headerLeft: () => (
    <FontAwesome
      name="bars"
      size={24}
      color="white"
      style={{ marginLeft: 10 }}
      onPress={() => {
        navigation.toggleDrawer();
      }}
    />
  ),
});

export {
  MainStackNavigator,
  CategoryStackNavigator,
  LearningStackNavigator,
  NotificationStackNavigator,
  LikeCoursesStackNavigator,
  ManageLearnStackNavigator,
};
