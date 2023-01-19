import { Alert, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { ListItem } from "../../components/ListItem";

export const Settings = ({ navigation }) => {
  const eraseAllDataAlert = () => {
    Alert.alert(
      "Are you sure?",
      "Once you erase the data, it cannot be recovered!",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Erase",
          onPress: () => console.log("OK Pressed"),
          style: "destructive",
        },
      ]
    );
  };
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
        onClick={() => navigation.navigate("categories")}
      />
      <ListItem
        label="Erase all data"
        isDestructive
        onClick={eraseAllDataAlert}
      />
    </View>
  );
};
