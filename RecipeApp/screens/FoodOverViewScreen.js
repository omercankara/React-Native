import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";

import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";

export default function FoodOverViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayFoods = FOODS.filter((item) => {
    return item.categoryIds.includes(categoryId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  function renderFoodItem(itemData) {
    const foodData = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };
    return <FoodItem {...foodData} />;
  }

  return (
    <View>
      <FlatList
        data={displayFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
