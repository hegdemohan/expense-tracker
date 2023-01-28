import { SimpleLineIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabBarIcons from "../components/TabBarIcons";
import { theme } from "../theme/Theme";
import { Add, Budget, Expenses, Settings } from "./tabScreens";
const Tab = createBottomTabNavigator();

export const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>();
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
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => bottomSheetRef.current?.expand()}
            >
              <SimpleLineIcons
                name="calendar"
                size={24}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          ),
        }}
        name="Budget"
      >
        {() => <Budget bottomSheetRef={bottomSheetRef} />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcons type={"add"} {...props} />,
        }}
        name="Add"
        component={Add}
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
