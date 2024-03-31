import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Homepage, Login, Register, Dashboard,Profile, Search } from './screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName = 'Homepage'
    >
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerShown:false
        }}

      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown:false
        }}

      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown:false
        }}

      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown:false
        }}
        
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false
        }}

      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown:false
        }}

      />
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
    fontSize: 22,
    color: 'black'
  },
});
