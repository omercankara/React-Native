import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { FOODS } from '../data/dummy-data';

export default function FavoritesScreen() {
  const favoriteFoodIds = useSelector((state) => state.FavoriteFood.ids);

  // Favori yemekleri filtrele ve yeni bir dizi oluştur
  const favoriteFoods = FOODS.filter((item) => favoriteFoodIds.includes(item.id));

  // FlatList için renderItem fonksiyonu
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>{item.complexity} - {item.affordability}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={favoriteFoods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#888',
  },
});
