import { View, Text } from "react-native";
import React from "react";
import { Expense } from "../types/expense";
import { theme } from "../theme/Theme";

type Props = {
  expense: Expense;
};
export const ExpensesRow = ({ expense }: Props) => {
  return (
    <View
      style={{ display: "flex", flexDirection: "column", marginBottom: 12 }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: theme.colors.textPrimary,
          }}
        >
          {expense.note}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: theme.colors.textPrimary,
          }}
        >
          ${expense.amount}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: `${expense.category.color}66`,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: expense.category.color, fontSize: 13 }}>
            {expense.category.name}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 17,
            color: theme.colors.textSecondary,
          }}
        >
          {expense.date.getHours()}: {expense.date.getMinutes()}
        </Text>
      </View>
    </View>
  );
};
