import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { globalStyles } from "../styles/global";
import COLORS from "../constant/colors";
const { width } = Dimensions.get("screen");
const Details = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>home</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Details;
