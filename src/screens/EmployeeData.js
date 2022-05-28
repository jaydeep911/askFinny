import React from "react";

import { View, Text, StyleSheet } from "react-native";
import AppColors from "../constants/AppColors";

const EmployeeDataScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.appBackgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Employee Data Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default EmployeeDataScreen;
