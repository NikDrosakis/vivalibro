// Footer.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Book')}>
        <Ionicons name="book" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Search')}>
        <Ionicons name="search" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Documentation')}>
        <Ionicons name="help-buoy" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Footer;
