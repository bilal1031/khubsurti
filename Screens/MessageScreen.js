import React from "react";
import { View, StyleSheet, Text } from "react-native";

function MessageScreen(props) {
  return (
    <View style={styles.maincontainer}>
      <Text>MessagesScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default MessageScreen;
