import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Newbook from './pages/Newbook';
import GoogleLogin from './components/GoogleLogin';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();
export default function App() {
  useEffect(() => {
    const checkAuth = async () => {
      const gsid = await AsyncStorage.getItem('GSID');
      const gsgrp = await AsyncStorage.getItem('GSGRP');
      const gslibid = await AsyncStorage.getItem('GSLIBID');

      if (!gsid || !gsgrp || !gslibid) {
        navigationRef.current?.navigate('Login');
      } else {
        navigationRef.current?.navigate('Home');
      }
    };

    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Signup" component={Signup} />
           <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
             <Stack.Screen name="Newbook" component={Newbook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}