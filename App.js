import React from 'react';
import MainPage from './components/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
<<<<<<< HEAD
import Settings from './components/settings';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
=======
import Settings from './components/Settings';
import LandingPage from './components/LandingPage';
>>>>>>> 3e7c09bf9625675bc675ce182da9254d952614e4

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="LandingPage" component={LandingPage} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={MainPage} />
        <Stack.Screen options={{headerShown: false}} name="Settings" component={Settings} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}



