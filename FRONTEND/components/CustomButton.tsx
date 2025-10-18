import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React from "react";
import { CustomButtonProps } from "../types";

import { colors, fonts } from "@/constants/colors";

const CustomButton = ({
  onPress,
  title = "Click Me",
  textStyle,
  isLoading = false,
  style,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn]}
      disabled={isLoading}
    >
      <View style={[styles.centerRow, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centerRow: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#39A75A",
    padding: 13,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  btn: {
    minWidth: "100%",
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: fonts.poppinsSemiBold,
  },
});
export default CustomButton;
