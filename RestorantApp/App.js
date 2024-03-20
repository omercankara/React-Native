import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import ResultDetailsScreen from './screens/ResultDetailsScreen';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle:'Restaurant App'}}>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ResultDetailsScreen" component={ResultDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
