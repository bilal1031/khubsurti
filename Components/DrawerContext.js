import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import CustomDrawerItem from "./CustomDrawerItem";
function DrawerContext(props) {
  return (
    <View style={styles.maincontainer}>
      <DrawerContentScrollView {...props}>
        <View style={{ height: 150, backgroundColor: "white" }}></View>

        <CustomDrawerItem
          color={props.color}
          size={props.size}
          icon="user"
          label="Main"
          onPress={() =>
            props.navigation.navigate("Main", {
              name: "Main",
              color: "dodgerblue",
            })
          }
        />
        <CustomDrawerItem
          color={props.color}
          size={props.size}
          icon="setting"
          label="Setting"
          onPress={() =>
            props.navigation.navigate("Settings", {
              name: "Settings",
              color: "tomato",
            })
          }
        />
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: { flex: 1, backgroundColor: "#2b5876" },
  drawerItem: { color: "white" },
});
export default DrawerContext;
