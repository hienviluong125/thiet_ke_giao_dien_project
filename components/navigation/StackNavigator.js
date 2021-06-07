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
import CourseDetail from "../pages/CourseDetail";
import CourseDocument from "../pages/CourseDocument";
import QuizList from "../pages/QuizList";
import Quiz from "../pages/Quiz";
import QuizAnswer from "../pages/QuizAnswer";
import QuizResult from "../pages/QuizResult";
import ListCourse from "../pages/ListCourse";

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
    <Stack.Navigator>
      <Stack.Screen
        name="Learning"
        component={Learning}
        options={({ navigation }) => {
          const baseOptions = screenOptions({ navigation });
          return {
            ...baseOptions,
            headerTitle: "Học tập",
          };
        }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{
          ...headerBaseStyle,
          headerTitle: "Hóa học 10",
        }}
      />
      <Stack.Screen
        name="CourseDocument"
        component={CourseDocument}
        options={{
          ...headerBaseStyle,
          headerTitle: "Hóa học 10",
        }}
      />

      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          ...headerBaseStyle,
          headerTitle: "Hóa học 10",
        }}
      />

      <Stack.Screen
        name="QuizList"
        component={QuizList}
        options={{
          ...headerBaseStyle,
          headerTitle: "Hóa học 10",
        }}
      />

      <Stack.Screen
        name="QuizAnswer"
        component={QuizAnswer}
        options={{
          ...headerBaseStyle,
          headerTitle: "Hóa học 10",
        }}
      />

      <Stack.Screen
        name="QuizResult"
        component={QuizResult}
        options={{
          ...headerBaseStyle,
          headerTitle: "Hóa học 10",
        }}
      />

      <Stack.Screen
        name="ListCourse"
        component={ListCourse}
        options={{
          ...headerBaseStyle,
          headerTitle: "Hóa học 10",
        }}
      />
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
    height: 90,
  },
  headerTitle: null,
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleStyle: {
    fontSize: 23,
  },
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
