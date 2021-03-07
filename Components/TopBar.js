import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Font from "./Font";
function TopBar(props) {
  const font = Font();
  return (
    <>
      <View style={styles.topbar}>
        <Text style={[styles.title, { fontFamily: font }]}>{props.title}</Text>
        <View style={styles.searchbar}>
          <TextInput style={styles.TextInput} />
          <TouchableNativeFeedback onPress={() => console.log("pressed")}>
            <View style={styles.buttondiv}>
              <MaterialCommunityIcons name="magnify" size={30} />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  topbar: {
    width: "100%",
    height: 100,
    backgroundColor: "#302b63",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  searchbar: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "space-between",
    paddingLeft: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  TextInput: { fontSize: 18, width: "80%" },
  buttondiv: {
    height: "101%",
    width: 50,
    backgroundColor: "#dddddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: { fontSize: 24, color: "white", marginBottom: 10 },
});
export default TopBar;
