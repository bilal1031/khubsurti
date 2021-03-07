import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./Screens/MainScreen";
import DrawerContext from "./Components/Navigation/DrawerContext";
import SettingScreen from "./Screens/SettingScreen";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContext color="white" size={30} {...props} />
      )}
      initialRouteName="Main"
      gestureHandlerProps={false}
    >
      <Drawer.Screen
        name="Main"
        initialParams={{ name: null, color: "white" }}
        component={MainScreen}
      />
      <Drawer.Screen
        name="Settings"
        initialParams={{ name: null, color: "white" }}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
