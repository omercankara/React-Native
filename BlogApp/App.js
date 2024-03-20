import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './src/Screens/HomeScreens';
import { AntDesign } from '@expo/vector-icons';
import ShowScreen from './src/Screens/ShowScreen';
import CreateBlogScreen from './src/Screens/CreateBlogScreen';
import EditScreen from "./src/Screens/EditScreen"
import BlogContextProvider from "./src/Context/BlogContext"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'blogApp' }}>
        
          <Stack.Screen

            component={HomeScreens}
            name="HomeScreens"
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateBlogScreen')}>
                  <AntDesign name="plus" size={40} color="black" />
                </TouchableOpacity>
              )
            })}

          />
        
          <Stack.Screen name="CreateBlogScreen" component={CreateBlogScreen} />
        
          <Stack.Screen
            name="ShowScreen"
            component={ShowScreen}
            options={({ navigation,route }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('EditScreen',{id:route.params.id})}>
                  <AntDesign name="edit" size={40} color="black" />
                </TouchableOpacity>
              )
            })}

          />
          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogContextProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
