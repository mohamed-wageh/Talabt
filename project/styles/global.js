import { StyleSheet } from "react-native";
import COLORS from "../constant/colors";
export const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.black,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: COLORS.grey,
  },
  logo:{
    width:"100%"
  }
});
