import { StyleSheet } from "react-native";
import COLORS from "../constant/colors";
export const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: COLORS.black,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    color: COLORS.grey,
  },
  logo:{
    width:"100%"
  }
});
