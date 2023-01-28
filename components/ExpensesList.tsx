import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { ExpensesGroup } from "../types/expense";
import { ExpensesRow } from "./ExpensesRow";
import { theme } from "../theme/Theme";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Hr } from "./Hr";

type Props = {
  groups: ExpensesGroup[];
};
export const ExpensesList = ({ groups }: Props) => {
  return (
    <FlatList
      data={groups}
      keyExtractor={(item) => item.day}
      style={{ height: "100%" }}
      renderItem={({ item: { day, expenses, total } }) => (
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

          <Hr />

          {expenses.map((expense) => (
            <ExpensesRow key={expense.id} expense={expense} />
          ))}

          <Hr />

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
              $ {total}
            </Text>
          </View>
        </View>
      )}
    />
  );
};
