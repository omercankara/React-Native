import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default FoodItem = (props) => {

  const navigation = useNavigation()
  const FoodItemHandler = () => {
    navigation.navigate('FoodDetail', {
      foodId:props.id
    })
  }
  return (
    <View style={styles.FoodItem}>
      <Pressable
        onPress={FoodItemHandler}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerView}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{props.complexity}</Text>
            <Text style={styles.detailItem}>{props.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  FoodItem: {
    margin: 15,
    elevation: 4,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    borderRadius: 5,
  },
  innverView: {},
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
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
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
