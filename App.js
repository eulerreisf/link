import 'react-native-gesture-handler';
import React from 'react';
//  React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//  Pages
import SignUp from "./src/components/SignUp";
import SignIn from "./src/components/SignIn"

const Stack = createStackNavigator();

export const App = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='SignIn' component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>;

export default App;
