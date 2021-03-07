import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import {} from "react-native-gesture-handler";
import MessageBox from "../Components/MessageBox";
import TopBar from "../Components/TopBar";
function MessageScreen(props) {
  const msgs = [
    { id: 0, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 1, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 2, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 3, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 4, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 5, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 6, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 7, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 8, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 9, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
    { id: 10, name: "Bilal", msg: "Hello! How are you?", time: "9:00pm" },
  ];
  return (
    <View style={styles.maincontainer}>
      <View style={styles.topdiv}>
        <TopBar title="Messages" />
      </View>
      <View style={styles.maindiv}>
        <FlatList
          data={msgs}
          keyExtractor={(msgs) => msgs.id.toString()}
          renderItem={({ item }) => (
            <MessageBox name={item.name} msg={item.msg} time={item.time} />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: { flex: 1, backgroundColor: "white", top: 25 },
  topdiv: {
    width: "100%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  maindiv: {
    position: "absolute",
    top: 95,
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 5,
    paddingBottom: 130,
  },
});
export default MessageScreen;
