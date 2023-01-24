import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { ListItem } from "../../../../components/ListItem";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

type Props = {
  date: Date;
  setDate(date: Date): void;
};
export const DateField = ({ date, setDate }: Props) => {
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShow(false);
  };

  return (
    <ListItem
      label="Date"
      details={
        <TouchableOpacity
          onPress={() => {
            setShow(true);
          }}
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          {Platform.OS === "android" && (
            <Text
              style={{
                fontSize: 18,
                color: "white",
              }}
            >
              {dayjs(date).format("DD. MMM YYYY")}
            </Text>
          )}
          {((show && Platform.OS === "android") || Platform.OS === "ios") && (
            <DateTimePicker
              value={date}
              mode={"date"}
              onChange={onChange}
              maximumDate={new Date()}
              minimumDate={
                new Date(
                  new Date().getFullYear() - 1,
                  new Date().getMonth(),
                  new Date().getDate()
                )
              }
              themeVariant="dark"
            />
          )}
        </TouchableOpacity>
      }
    />
  );
};
