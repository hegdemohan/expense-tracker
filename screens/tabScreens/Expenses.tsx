import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ExpensesList } from "../../components/ExpensesList";
import { Recurrence } from "../../types/reccurrence";

export const Expenses = () => {
  return (
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
  );
};
