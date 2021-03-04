import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MessageScreen from "./MessageScreen";
import CallsScreen from "./CallsScreen";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="Messages" />
        <Tab.Screen name="Calls" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
function MainScreen({ route, navigation }) {
  const { name, color } = route.params;
  const [bgcolor, setbgcolor] = useState(color);
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Messages"
        shifting={true}
        barStyle={{
          backgroundColor: "#302b63",
          padding: 8,
          overflow: "hidden",
        }}
      >
        <Tab.Screen
          name="Messages"
          component={MessageScreen}
          options={{
            tabBarBadge: 3,
            title: "Messages",
            tabBarIcon: "message",
          }}
        />
        <Tab.Screen
          name="Calls"
          component={CallsScreen}
          options={{
            title: "Calls",
            tabBarIcon: "phone",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "dodgerblue",
  },
});
export default MainScreen;
