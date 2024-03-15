import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen"
import CoursesScreen from "./src/screens/CoursesScreen"
import CoursesInformation from './src/screens/CoursesInformation';
import CounterScreen from "./src/screens/CounterScreen"
import ChangeColor from './src/screens/ChangeColor';
import PasswordScreen from './src/screens/PasswordScreen';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
        <Stack.Screen name="CoursesInformation" component={CoursesInformation} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ChangeColor" component={ChangeColor} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});
