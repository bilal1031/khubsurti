import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import CustomDrawerItem from "./CustomDrawerItem";
import DrawerItemCard from "../Cards/DrawerItemCard";
function DrawerContext(props) {
  const [isactive, setactive] = useState(1);
  return (
    <View style={styles.maincontainer}>
      <DrawerContentScrollView {...props}>
        <DrawerItemCard />
        <CustomDrawerItem
          color={props.color}
          size={props.size}
          icon="account"
          label="Main"
          onPress={() => {
            props.navigation.navigate("Main", {
              name: "Main",
              color: "dodgerblue",
            });
            setactive(1);
          }}
          isactive={isactive == 1 ? true : false}
        />
        <CustomDrawerItem
          color={props.color}
          size={props.size}
          icon="cog"
          label="Setting"
          onPress={() => {
            props.navigation.navigate("Settings", {
              name: "Settings",
              color: "tomato",
            });
            setactive(2);
          }}
          isactive={isactive == 2 ? true : false}
        />
      </DrawerContentScrollView>
      <CustomDrawerItem
        color={props.color}
        size={props.size}
        icon="logout"
        label="Logout"
        onPress={() => {
          props.navigation.navigate("Main", {
            name: "Main",
            color: "dodgerblue",
          });
          setactive(3);
        }}
        style={{ bottom: 10 }}
        isactive={isactive == 3 ? true : false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: { flex: 1, backgroundColor: "#0f0c29" },
  drawerItem: { color: "white" },
});
export default DrawerContext;
