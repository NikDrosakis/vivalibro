// useGlobalStyles.js
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

const useGlobalStyles = () => {
  const { darkMode } = useContext(AppContext);

  const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: darkMode ? '#121212' : '#fff',
    },
    label: {
    fontSize: 16,
    marginBottom: 2,
    color: darkMode ? '#ffffff' : '#000000',
    },
    colorButton: darkMode ? 'white' : 'black',
    bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: darkMode ? '#000000' : '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
    text: {
      color: darkMode ? '#fff' : '#000',
    },
    input: {
      height: 40,
      borderColor: darkMode ? '#555' : '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      backgroundColor: darkMode ? '#222' : '#fff',
      color: darkMode ? '#fff' : '#000',
    },
    featureImage: {
      width: '100%',
      height: 200,
      marginBottom: 10,
    },
  });

  return globalStyles;
};

export default useGlobalStyles;
