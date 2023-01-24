import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo, useRef } from "react";
import { ListItem } from "../../../../components/ListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { theme } from "../../../../theme/Theme";
import { isRecurrence, Recurrence } from "../../../../types/reccurrence";
import { Category } from "../../../../types/category";

type Props = {
  category: Category;
  setCategory(category: Category): void;
  onPress(): void;
};

export const CategoryField = ({ category, setCategory, onPress }: Props) => {
  return (
    <ListItem
      label="Category"
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
              color: category.color,
              textTransform: "capitalize",
            }}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      }
    />
  );
};
