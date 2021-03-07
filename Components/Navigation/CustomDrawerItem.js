import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
function CustomDrawerItem(props) {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={props.onPress} style={props.style}>
      <LinearGradient
        colors={
          props.isactive
            ? ["#0f0c29", "#302b63", "#24243e"]
            : ["#0f0c29", "#0f0c29"]
        }
        start={[0, 1]}
        end={[1, 0]}
      >
        <View style={styles.DrawerItemdiv}>
          <MaterialCommunityIcons
            color={props.color}
            size={props.size}
            name={props.icon}
          />
          <Text style={styles.label}>{props.label}</Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  DrawerItemdiv: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
  },
  label: {
    color: "white",
    marginLeft: 30,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});
export default CustomDrawerItem;
