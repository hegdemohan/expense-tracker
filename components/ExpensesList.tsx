import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { ExpensesGroup } from "../types/expense";
import { ExpensesRow } from "./ExpensesRow";
import { theme } from "../theme/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  groups: ExpensesGroup[];
};
export const ExpensesList = ({ groups }: Props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
    >
      <View style={{ display: "flex", alignItems: "center" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 16,
          }}
        >
          <Text style={{ color: theme.colors.textPrimary, fontSize: 17 }}>
            Total for:{" "}
          </Text>
          <TouchableOpacity style={{}}>
            <Text style={{ color: theme.colors.primary, fontSize: 17 }}>
              This week
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: theme.colors.textPrimary, fontSize: 28 }}>
            $195
          </Text>
        </View>
      </View>
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
              $ {total}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
