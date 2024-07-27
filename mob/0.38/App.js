import React, {  useEffect,useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mylib from './pages/Mylib';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GoogleLogin from './components/GoogleLogin';
import Book from './pages/Book';
import Cat from './pages/Cat';
import Writer from './pages/Writer';
import Editor from './pages/Editor';
import Documentation from './pages/Documentation';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import { AppProvider } from './contexts/AppContext';
const Stack = createStackNavigator();

export const navigationRef = React.createRef();

export default function App({navigation}) {
    const [currentRoute, setCurrentRoute] = useState('');
  useEffect(() => {
    const checkAuth = async () => {
      const gsid = await AsyncStorage.getItem('GSID');
      const gsgrp = await AsyncStorage.getItem('GSGRP');
      const gslibid = await AsyncStorage.getItem('GSLIBID');

      if (!gsid || !gsgrp || !gslibid) {
        navigationRef.current?.navigate('Login');
     } else if (currentRoute === 'Mylib') {
        navigationRef.current?.navigate('Mylib',{gsid:gsid,gsgrp:gsgrp,gslibid:gslibid});
          } else if (currentRoute === 'Cat') {
        navigationRef.current?.navigate('Cat', { gsid });    
     } else if (currentRoute === 'Profile') {
        navigationRef.current?.navigate('Profile', { gsid });
      } 
    };
    checkAuth();
  }, [currentRoute]);


  return (
     <AppProvider>
    <NavigationContainer
          ref={navigationRef}
      onStateChange={() => {
        const route = navigationRef.current?.getCurrentRoute();
        setCurrentRoute(route.name);
      }}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Mylib" component={Mylib} />
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
        <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Writer" component={Writer} />
        <Stack.Screen name="Editor" component={Editor} />
                <Stack.Screen name="Cat" component={Cat} />
          <Stack.Screen name="Documentation" component={Documentation} />
             <Stack.Screen name="Settings" component={Settings} />
         <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}