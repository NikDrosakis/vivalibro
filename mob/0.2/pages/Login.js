import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({ navigation }) {
  const [mail, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    if (mail && pass) {
      try {
        // Replace with your actual API endpoint
        const response = await axios.post(`https://vivalibro.com:3002/login`, {
          mail:mail,pass:pass
        });
        if(!!response.data){
        var res=response.data;        
          // Store the token and navigate to the main app screen
          // For example, using AsyncStorage and navigation:
          // await 
         await AsyncStorage.setItem('GSID', res.id.toString());
         await AsyncStorage.setItem('GSGRP', res.grp.toString());
        await  AsyncStorage.setItem('GSLIBID', res.libid.toString());
          navigation.navigate('Home');
          console.log('Login successful');
          console.log(res)
        } else {
          console.error('Login failed:', response.data.message);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      alert('Please enter both email and password');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={mail}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
  <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={pass}
          onChangeText={setPass}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText2}>Signup</Text>
      </TouchableOpacity>
           <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('GoogleLogin')}>
        <Text style={styles.buttonText2}>Google Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
   passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  eyeIcon: {
    right:30,
    bottom:10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
    button2: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
      buttonText2: {
    color: '#000',
    fontSize: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
