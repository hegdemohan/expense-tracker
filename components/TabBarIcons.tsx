import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TabBarIconsProps = {
  type: "expense" | "income" | "budget" | "settings";
  focused: boolean;
  color: string;
  size: number;
};
const TabBarIcons = ({ type, color, focused, size }: TabBarIconsProps) => {
  switch (type) {
    case "expense":
      return <SimpleLineIcons name="wallet" size={size} color={color} />;
    case "budget":
      return <SimpleLineIcons name="chart" size={size} color={color} />;
    case "income":
      return (
        <MaterialCommunityIcons
          name="wallet-plus-outline"
          size={size}
          color={color}
        />
      );
    case "settings":
      return <SimpleLineIcons name="equalizer" size={size} color={color} />;
  }
};

export default TabBarIcons;
