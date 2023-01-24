import { View, Text, TextInput } from "react-native";
import React from "react";
import { ListItem } from "../../../../components/ListItem";

export const AmountField = ({ amount, setAmount }) => {
  return (
    <ListItem
      label="Amount"
      details={
        <TextInput
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
          placeholder="Enter amount"
          placeholderTextColor={"#FFFFFF50"}
          textAlign="right"
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.nativeEvent.text))}
          style={{
            flex: 1,
            width: "100%",
            marginLeft: 16,
            paddingLeft: 8,
            borderRadius: 8,
            color: "white",
            fontSize: 18,
          }}
        />
      }
    />
  );
};
