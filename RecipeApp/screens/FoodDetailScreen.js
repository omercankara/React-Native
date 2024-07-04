import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  FlatList,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";

import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/Favorites";

export default function FoodDetailScreen({ route, navigation }) {
  const favoriteFoodIds = useSelector((state) => [...state.FavoriteFood.ids]);


  const id = route.params.foodId;
  const dispatch = useDispatch();
  const selectedFood = FOODS.find((item) => item.id == id);

  //state içinde var mı ?
  const foodIsFavorite = favoriteFoodIds.includes(id);

  function changeFavorite() {
    if (foodIsFavorite) {
      dispatch(removeFavorite({ id: id }));
      console.log("test")
    } else {
      dispatch(addFavorite({ id:id }));
      console.log(favoriteFoodIds);
    }
  }

  const pressHandler = () => {};

  //navbar favori icon işlemi
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={pressHandler}>
            <AntDesign
              name={foodIsFavorite ? "star" : "staro"}
              size={24}
              color="white"
              onPress={changeFavorite}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "red",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 7,
  },
  rootContainer: {
    marginBottom: 50,
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  subTitle: {
    color: "orange",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
