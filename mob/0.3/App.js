import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mylib from './pages/Mylib';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Newbook from './pages/Newbook';
import GoogleLogin from './components/GoogleLogin';
import Book from './pages/Book';
import Writer from './pages/Writer';
import Editor from './pages/Editor';
import Documentation from './pages/Documentation';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

export default function App({navigation}) {
  useEffect(() => {
    const checkAuth = async () => {
      const gsid = await AsyncStorage.getItem('GSID');
      const gsgrp = await AsyncStorage.getItem('GSGRP');
      const gslibid = await AsyncStorage.getItem('GSLIBID');

      if (!gsid || !gsgrp || !gslibid) {
        navigationRef.current?.navigate('Login');
      } else {
        navigationRef.current?.navigate('Mylib');
      }
    };
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Mylib" component={Mylib} />
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
        <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Writer" component={Writer} />
        <Stack.Screen name="Editor" component={Editor} />
          <Stack.Screen name="Documentation" component={Documentation} />
             <Stack.Screen name="Settings" component={Settings} />
         <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}