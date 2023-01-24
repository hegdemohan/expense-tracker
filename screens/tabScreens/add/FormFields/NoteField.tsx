import React from "react";
import { TextInput } from "react-native";
import { ListItem } from "../../../../components/ListItem";

export const NoteField = ({ note, setNote }) => {
  return (
    <ListItem
      label="Note"
      details={
        <TextInput
          keyboardAppearance="dark"
          returnKeyType="done"
          placeholder="Enter a note"
          placeholderTextColor={"#FFFFFF50"}
          textAlign="right"
          value={note}
          onChange={(event) => setNote(event.nativeEvent.text)}
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
