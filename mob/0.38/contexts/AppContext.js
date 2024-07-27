// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadDarkMode = async () => {
      try {
        const value = await AsyncStorage.getItem('display');
        if (value !== null) {
          setDarkMode(value === 'dark');
        } else {
          const colorScheme = Appearance.getColorScheme();
          setDarkMode(colorScheme === 'dark');
        }
      } catch (e) {
        console.error('Failed to load dark mode state', e);
      }
    };
    loadDarkMode();
  }, []);

  const toggleDarkMode = async () => {
    try {
      const newValue = !darkMode;
      setDarkMode(newValue);
      await AsyncStorage.setItem('display', newValue ? 'dark' : 'light');
    } catch (e) {
      console.error('Failed to save dark mode state', e);
    }
  };

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
