// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    
  const handleLogout = async () => {
    await AsyncStorage.removeItem('GSID');
    await AsyncStorage.removeItem('GSGRP');
    await AsyncStorage.removeItem('GSLIBID');
    setIsAuthenticated(false);
  };
console.log('AuthContext:', { isAuthenticated, setIsAuthenticated, handleLogout });
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
