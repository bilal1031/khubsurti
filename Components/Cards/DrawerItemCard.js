import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useFonts } from "expo-font";
function DrawerItemCard(props) {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View
      style={{
        height: 150,
        backgroundColor: "#24243e",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          overflow: "hidden",
          marginLeft: 10,
        }}
      >
        <Image
          source={{
            uri:
              "https://cdn.dribbble.com/users/1632728/screenshots/4693038/profilepic_dribbble.gif",
          }}
          style={{ height: 80, width: 80 }}
        />
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          marginLeft: 15,
          fontFamily: "Montserrat",
        }}
      >
        Muhammad Bilal
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({ container: {} });
export default DrawerItemCard;
