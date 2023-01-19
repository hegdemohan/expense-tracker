import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { ColorPicker, fromHsv } from "react-native-color-picker";
import {
  GestureHandlerRootView,
  RectButton,
  TextInput,
} from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import uuid from "react-native-uuid";
import { ListItem } from "../components/ListItem";
import { theme } from "../theme/Theme";

type Category = {
  id: string;
  name: string;
  color: string;
};

export const Categories = () => {
  const [newCategory, setNewCategory] = useState("");
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("violet");
  const [categories, setCategories] = useState<Category[]>([
    {
      id: uuid.v4().toString(),
      name: "Groceries",
      color: "#f123de",
    },
    {
      id: uuid.v4().toString(),
      name: "Transportation",
      color: "#eae12d",
    },
  ]);

  const addCategory = () => {
    if (newCategory === "") return;
    setCategories([
      ...categories,
      {
        id: uuid.v4().toString(),
        name: newCategory,
        color: selectedColor,
      },
    ]);
    setNewCategory("");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 16,
      }}
    >
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            category={item}
            onPress={() =>
              setCategories(categories.filter(({ id }) => id !== item.id))
            }
          />
        )}
        keyExtractor={(item) => item.id}
        style={{
          borderRadius: 11,
          overflow: "hidden",
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={120}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 8,
          }}
        >
          <TouchableOpacity
            style={{ padding: 12 }}
            onPress={() => setOpenColorPicker(true)}
          >
            <View
              style={{
                backgroundColor: selectedColor,
                height: 24,
                width: 24,
                borderRadius: 12,
                marginRight: 8,
                borderColor: "white",
                borderWidth: 2,
              }}
            />
          </TouchableOpacity>
          <TextInput
            value={newCategory}
            onChange={(event) => setNewCategory(event.nativeEvent.text)}
            style={{
              flex: 1,
              borderWidth: 1,
              color: "white",
              borderColor: theme.colors.border,
              borderRadius: 8,
              paddingLeft: 8,
            }}
          />
          <TouchableOpacity style={{ padding: 12 }} onPress={addCategory}>
            <SimpleLineIcons name="check" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Modal transparent visible={openColorPicker} animationType="slide">
        <View
          style={{
            flex: 1,
            display: "flex",
            padding: 24,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: 24,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              backgroundColor: theme.colors.card,
            }}
          >
            <ColorPicker
              hideSliders
              onColorChange={(color) => setSelectedColor(fromHsv(color))}
              style={{ height: 300, width: "100%" }}
            />
            <Button title="Done" onPress={() => setOpenColorPicker(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

type CategoryProps = {
  category: Category;
  onPress(): void;
};

const Category = ({ category, onPress }: CategoryProps) => {
  const { color, id, name } = category;
  return (
    <Swipeable
      key={id}
      renderRightActions={() => {
        return (
          <RectButton
            style={{
              backgroundColor: theme.colors.error,
              alignItems: "center",
              width: 50,
              justifyContent: "center",
            }}
            onPress={onPress}
          >
            <Feather name="trash" size={28} color="white" />
          </RectButton>
        );
      }}
    >
      <ListItem key={id} label={name} color={color} />
    </Swipeable>
  );
};
