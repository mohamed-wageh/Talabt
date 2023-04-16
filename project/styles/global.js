import { StyleSheet } from "react-native";
import COLORS from "../constant/colors";
export const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.light,
    fontFamily: "Nunito-Bold",
    height:"100%"
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.black,
    fontFamily: "Nunito-Bold",
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: COLORS.grey,
    fontFamily: "Nunito-Regular",
  },
  logo: {
    width: "100%",
  },
});
