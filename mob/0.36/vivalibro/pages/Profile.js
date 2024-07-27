// Profile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
  import Footer from '../components/Footer';
  
const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
         <Footer navigation={navigation} />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Profile;
