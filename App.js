import React from 'react';
import MainPage from './components/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import settings from './components/settings';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={MainPage} />
        <Stack.Screen options={{headerShown: false}} name="Settings" component={settings} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}



