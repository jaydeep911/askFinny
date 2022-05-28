import React from "react";

import { View, Text, StyleSheet } from "react-native";
import AppColors from "../../src/constants/AppColors";

const CommunityScreen = ({ navigation }) => {
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
        Community screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CommunityScreen;
