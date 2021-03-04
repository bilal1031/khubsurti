import { useFonts } from "expo-font";
export default Font = () => {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
};
