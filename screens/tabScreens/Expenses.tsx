import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ExpensesList } from "../../components/ExpensesList";
import { Recurrence } from "../../types/reccurrence";
import { theme } from "../../theme/Theme";

export const Expenses = () => {
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
      <ExpensesList
        groups={[
          {
            day: "Today",
            total: 110,
            expenses: [
              {
                amount: "50",
                category: {
                  color: "#eea132",
                  id: "1",
                  name: "Food",
                },
                date: new Date(),
                id: "1",
                note: "Some random note",
                recurrence: Recurrence.None,
              },
              {
                amount: "60",
                category: {
                  color: "#ecc132",
                  id: "1",
                  name: "Travel",
                },
                date: new Date(),
                id: "2",
                note: "Some random note",
                recurrence: Recurrence.None,
              },
            ],
          },
          {
            day: "Yesterday",
            total: 234,
            expenses: [
              {
                amount: "34",
                category: {
                  color: "#bea132",
                  id: "1",
                  name: "Electricity",
                },
                date: new Date(),
                id: "1",
                note: "Some random note",
                recurrence: Recurrence.None,
              },
              {
                amount: "200",
                category: {
                  color: "#edc132",
                  id: "1",
                  name: "Gaming",
                },
                date: new Date(),
                id: "2",
                note: "Some random note",
                recurrence: Recurrence.None,
              },
            ],
          },
        ]}
      />
    </View>
  );
};
