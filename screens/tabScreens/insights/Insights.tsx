import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { MutableRefObject, useMemo, useState } from "react";
import { ExpensesList } from "../../../components/ExpensesList";
import { isRecurrence, Recurrence } from "../../../types/reccurrence";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { theme } from "../../../theme/Theme";
import WeeklyChart from "./charts/WeeklyChart";

type Props = {
  bottomSheetRef: MutableRefObject<BottomSheet>;
};
export const Insights = ({ bottomSheetRef }: Props) => {
  const snapPoints = useMemo(() => ["30%"], []);
  const [recurrence, setRecurrence] = useState(Recurrence.Weekly);

  const selectRecurrence = (val: Recurrence) => {
    setRecurrence(val);
    bottomSheetRef.current.close();
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            24 JAN - 31 JAN
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>$ 85</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            AVG/DAY
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>$ 10</Text>
        </View>
      </View>

      <View style={{ marginVertical: 16 }}>
        {recurrence === Recurrence.Weekly && (
          <WeeklyChart
            expenses={[
              {
                amount: "50",
                category: {
                  color: "#eea132",
                  id: "1",
                  name: "Food",
                },
                date: new Date("2023-01-24"),
                id: "1",
                note: "Some random note",
                recurrence: Recurrence.None,
              },
              {
                amount: "50",
                category: {
                  color: "#eea132",
                  id: "1",
                  name: "Food",
                },
                date: new Date("2023-01-24"),
                id: "2",
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
                date: new Date("2023-01-23"),
                id: "3",
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
                date: new Date("2023-01-22"),
                id: "4",
                note: "Some random note",
                recurrence: Recurrence.None,
              },
            ]}
          />
        )}
      </View>

      <View style={{ marginTop: 16 }}>
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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        handleStyle={{
          backgroundColor: theme.colors.card,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
        handleIndicatorStyle={{ backgroundColor: "#FFFFFF55" }}
      >
        <BottomSheetFlatList
          data={[Recurrence.Weekly, Recurrence.Monthly, Recurrence.Yearly]}
          keyExtractor={(i) => i}
          renderItem={(item) => (
            <TouchableOpacity
              style={{ paddingVertical: 8, paddingHorizontal: 24 }}
              onPress={() => selectRecurrence(item.item)}
            >
              <Text
                style={{
                  color:
                    recurrence === item.item
                      ? theme.colors.primary
                      : theme.colors.textPrimary,
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                {item.item}
              </Text>
            </TouchableOpacity>
          )}
          style={{ backgroundColor: theme.colors.card }}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({});
