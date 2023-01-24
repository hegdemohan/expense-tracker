import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { theme } from "../../../theme/Theme";
import { Category } from "../../../types/category";
import { isRecurrence, Recurrence } from "../../../types/reccurrence";
import { AmountField } from "./FormFields/AmountField";
import { CategoryField } from "./FormFields/CategoryField";
import { DateField } from "./FormFields/DateField";
import { NoteField } from "./FormFields/NoteField";
import { RecurrenceField } from "./FormFields/RecurrenceField";

enum SheetView {
  Recurrence = "recurrence",
  Categories = "categories",
}

const CATEGORIES: Category[] = [
  {
    id: "0",
    name: "None",
    color: "#FFFFFF50",
  },
  {
    id: "1",
    color: "#FFD600",
    name: "Food",
  },
  {
    id: "2",
    color: "#FFD600",
    name: "Transport",
  },
  {
    id: "3",
    color: "#FFD600",
    name: "Entertainment",
  },
  {
    id: "4",
    color: "#FFD600",
    name: "Shopping",
  },
];
export const Add = () => {
  const [sheetView, setSheetView] = useState<SheetView>(SheetView.Recurrence);
  const [amount, setAmount] = useState(0);
  const [recurrence, setRecurrence] = useState<Recurrence>(Recurrence.None);
  const [note, setNote] = useState("");
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);
  const [date, setDate] = useState(new Date());

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "40%"], []);

  const openBottomSheet = (val: SheetView) => {
    bottomSheetRef.current.expand();
    setSheetView(val);
  };
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{
          margin: 16,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            overflow: "hidden",
            alignItems: "center",
            borderRadius: 11,
          }}
        >
          <AmountField amount={amount} setAmount={setAmount} />
          <RecurrenceField
            recurrence={recurrence}
            onPress={() => openBottomSheet(SheetView.Recurrence)}
          />
          <DateField date={date} setDate={setDate} />
          <NoteField note={note} setNote={setNote} />
          <CategoryField
            category={category}
            setCategory={setCategory}
            onPress={() => openBottomSheet(SheetView.Categories)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.primary,
            paddingHorizontal: 20,
            paddingVertical: 12,
            marginVertical: 32,
            borderRadius: 10,
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

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
        {sheetView === SheetView.Recurrence && (
          <BottomSheetFlatList
            data={Object.values(Recurrence)}
            keyExtractor={(i) => i}
            renderItem={(item) => (
              <TouchableOpacity
                style={{ paddingVertical: 8, paddingHorizontal: 24 }}
                onPress={() => {
                  if (isRecurrence(item.item)) {
                    setRecurrence(item.item);
                    bottomSheetRef.current.close();
                  }
                }}
              >
                <Text
                  style={{
                    color: "white",
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
        )}
        {sheetView === SheetView.Categories && (
          <BottomSheetFlatList
            data={Object.values(CATEGORIES)}
            keyExtractor={({ id }) => id}
            renderItem={(item) => (
              <TouchableOpacity
                style={{ paddingVertical: 8, paddingHorizontal: 24 }}
                onPress={() => {
                  setCategory(item.item);
                  bottomSheetRef.current.close();
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: item.item.color,
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      marginEnd: 12,
                    }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      textTransform: "capitalize",
                    }}
                  >
                    {item.item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            style={{ backgroundColor: theme.colors.card }}
          />
        )}
      </BottomSheet>
    </View>
  );
};
