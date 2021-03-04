import React from "react";
import { View, StyleSheet, Text } from "react-native";

function CallsScreen(props) {
  return (
    <View style={styles.maincontainer}>
      <Text>Call Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default CallsScreen;
