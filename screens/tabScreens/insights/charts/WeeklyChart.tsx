import { Text, View } from "react-native";
import React, { useMemo } from "react";
import { Expense } from "../../../../types/expense";

type Props = {
  expenses: Expense[];
};

const dayNumberToName = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const WeeklyChart = ({ expenses }: Props) => {
  const groupedExpenses = useMemo(() => {
    const groupedExpenses = expenses.reduce((acc, expense) => {
      const day = dayNumberToName[new Date(expense.date).getDay()];
      if (acc[day]) {
        acc[day].push(expense);
      } else acc[day] = [expense];
      return acc;
    }, {} as Record<string, Expense[]>);
    return groupedExpenses;
  }, [expenses]);

  return (
    <View>
      <Text style={{ color: "white" }}>WeeklyChart</Text>
    </View>
  );
};

export default WeeklyChart;
