import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Budget, Expenses, Income, Settings } from "./screens";
import { theme } from "./theme/Theme";
import TabBarIcons from "./components/TabBarIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
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
            tabBarIcon: (props) => <TabBarIcons type={"income"} {...props} />,
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
    </NavigationContainer>
  );
}
