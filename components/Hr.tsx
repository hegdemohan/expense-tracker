import { View, Text } from "react-native";
import React from "react";
import { theme } from "../theme/Theme";

export const Hr = () => {
  return (
    <View
      style={{
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 2,
        marginBottom: 12,
      }}
    />
  );
};
