import React from "react";
import Font from "./Font";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
} from "react-native";
function MessageBox(props) {
  const font = Font();
  return (
    <View style={styles.ripplecontainer}>
      <TouchableNativeFeedback>
        <View style={styles.maincontainer}>
          <View style={styles.imgdiv}>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS0JnwO5wYqc2trrKj_87rfRJrTtbkRjvHA&usqp=CAU",
              }}
              style={{ height: 65, width: 65 }}
            />
          </View>
          <View style={styles.datadiv}>
            <Text style={[styles.name, { fontFamily: font }]}>
              {props.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.msg, { fontFamily: font }]}>
                {props.msg}
              </Text>
              <Text style={[styles.msg, { fontFamily: font }]}>
                {props.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  ripplecontainer: {
    height: 80,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 40,
    marginTop: 10,
  },

  maincontainer: {
    height: 80,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#e7e7e7",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  imgdiv: {
    height: 65,
    width: 65,
    borderRadius: 32,
    overflow: "hidden",
    elevation: 3,
  },
  datadiv: {
    flexDirection: "column",
    marginLeft: 20,
    paddingTop: 5,
    ///backgroundColor: "orange",
    width: "70%",
    height: "90%",
  },
  name: { fontSize: 20 },
  msg: { marginTop: 5, color: "#adadad" },
});
export default MessageBox;
