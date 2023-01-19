import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import TabBarIcons from "../components/TabBarIcons";
import { theme } from "../theme/Theme";
import { Budget, Expenses, Settings, Income } from "./tabScreens";
const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.card,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcons type={"expense"} {...props} />,
        }}
        name="Expenses"
        component={Expenses}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcons type={"budget"} {...props} />,
        }}
        name="Budget"
        component={Budget}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcons type={"add"} {...props} />,
        }}
        name="Income"
        component={Income}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcons type={"settings"} {...props} />,
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
