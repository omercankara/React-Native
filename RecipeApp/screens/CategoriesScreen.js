import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen({navigation}) {
  
  const renderCategoryItem = (itemData) => {
    function pressHandler(){
      navigation.navigate('FoodOverView', {
        categoryId:itemData.item.id
      })
    }


    return (
      <CategoryGrid title={itemData.item.title} color={itemData.item.color}  pressFood={pressHandler} />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
