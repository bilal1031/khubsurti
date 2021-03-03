import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function MainScreen({ route, navigation }) {
  const { name, color } = route.params;
  const [bgcolor, setbgcolor] = useState(color);
  return (
    <View style={[styles.maincontainer, { backgroundColor: color }]}>
      <StatusBar />
      <Text>{name} Screen</Text>
    </View>
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
