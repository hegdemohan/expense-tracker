import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ListItem } from "../../../../components/ListItem";

export const RecurrenceField = ({ recurrence, onPress }) => {
  return (
    <View>
      <ListItem
        label="Recurrence"
        details={
          <TouchableOpacity
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                textTransform: "capitalize",
              }}
            >
              {recurrence}
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};
