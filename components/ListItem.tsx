import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { theme } from "../theme/Theme";
import { Swipeable } from "react-native-gesture-handler";

type Props = {
  label: string;
  details?: JSX.Element;
  onClick(): void;
  swipeToDelete?(): void;
  onDelete?(): void;
  isDestructive?: boolean;
};

export const ListItem = ({
  label,
  details,
  onClick,
  swipeToDelete,
  onDelete,
  isDestructive,
}: Props) => {
  const item = useMemo(
    () => (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: theme.colors.card,
          justifyContent: details ? "space-between" : "flex-start",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
          padding: 20,
          width: "100%",
        }}
        onPress={onClick}
      >
        <Text
          style={{
            fontSize: 18,
            color: isDestructive ? theme.colors.error : "white",
          }}
        >
          {label}
        </Text>
        {details}
      </TouchableOpacity>
    ),
    []
  );
  if (swipeToDelete) return <Swipeable renderRightActions={() => item} />;
  else return item;
};
