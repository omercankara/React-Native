import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import FoodOverViewScreen from "./screens/FoodOverViewScreen";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoriteContextProvider from "./store/FavoriteContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "white" } }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Tüm kategoriler",
          drawerIcon: () => <Feather name="list" size={24} color="purple" />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          title: "Favoriler",
          drawerIcon: () => <AntDesign name="star" size={24} color="purple" />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "brown" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "lightblue" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="FoodOverView" component={FoodOverViewScreen} />
          <Stack.Screen
            options={{ title: "İçerik" }}
            name="FoodDetail"
            component={FoodDetailScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
