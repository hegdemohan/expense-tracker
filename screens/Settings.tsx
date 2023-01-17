import { View } from "react-native";
import React from "react";
import { ListItem } from "../components/ListItem";
import { Entypo } from "@expo/vector-icons";

export const Settings = () => {
  return (
    <View style={{ margin: 16, borderRadius: 11, overflow: "hidden" }}>
      <ListItem
        label="Categories"
        details={
          <Entypo
            name="chevron-small-right"
            size={24}
            color="white"
            style={{ opacity: 0.3 }}
          />
        }
        onClick={() => {}}
      />
      <ListItem label="Erase all data" isDestructive onClick={() => {}} />
    </View>
  );
};
