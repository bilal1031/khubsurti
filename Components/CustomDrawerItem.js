import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/AntDesign";
function CustomDrawerItem(props) {
  return (
    <DrawerItem
      icon={() => (
        <Icon color={props.color} size={props.size} name={props.icon} />
      )}
      label={props.label}
      labelStyle={styles.drawerItem}
      activeBackgroundColor="white"
      inactiveTintColor="white"
      activeTintColor="black"
      inactiveBackgroundColor="#2b5876"
      onPress={props.onPress}
    />
  );
}
const styles = StyleSheet.create({ container: {} });
export default CustomDrawerItem;
