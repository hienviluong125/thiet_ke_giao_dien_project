import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import DrawerContent from "./DrawerContent";
import { ManageLearnStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="ManageLearn" component={ManageLearnStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
