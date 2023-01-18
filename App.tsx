import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Categories } from "./screens/Categories";
import { Home } from "./screens/Home";
import { theme } from "./theme/Theme";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
