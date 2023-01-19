import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type TabBarIconsProps = {
  type: "expense" | "add" | "budget" | "settings";
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
    case "add":
      return <Ionicons name="md-add-sharp" size={40} color={color} />;
    case "settings":
      return <SimpleLineIcons name="equalizer" size={size} color={color} />;
  }
};

export default TabBarIcons;
