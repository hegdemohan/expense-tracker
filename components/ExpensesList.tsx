import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ExpensesGroup } from "../types/expense";
import { ExpensesRow } from "./ExpensesRow";
import { theme } from "../theme/Theme";

type Props = {
  groups: ExpensesGroup[];
};
export const ExpensesList = ({ groups }: Props) => {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      {groups.map(({ day, expenses, total }) => (
        <View
          key={day}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              marginBottom: 4,
              color: theme.colors.textSecondary,
              fontSize: 17,
            }}
          >
            {day}
          </Text>
          <View
            style={{
              borderBottomColor: theme.colors.border,
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 12,
            }}
          />
          {expenses.map((expense) => (
            <ExpensesRow key={expense.id} expense={expense} />
          ))}
          <View
            style={{
              borderBottomColor: theme.colors.border,
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 4,
            }}
          />
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: theme.colors.textSecondary,
              }}
            >
              Total:
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 17,
                color: theme.colors.textSecondary,
              }}
            >
              ${total}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
