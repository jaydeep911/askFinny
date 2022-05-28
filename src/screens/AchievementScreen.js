import React from "react";

import { View, Text, StyleSheet } from "react-native";
import AppColors from "../constants/AppColors";

const AchievementScreen = ({ navigation }) => {
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
        Achievement screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AchievementScreen;
