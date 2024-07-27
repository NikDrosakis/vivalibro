import React, { useState } from 'react';
import { Alert,View, Text, TextInput, TouchableOpacity, StyleSheet,Image  } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/header.png';
import calligraphicLogo from '../assets/logo.png'; 

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
        console.log(response);
        if(response.data.reply!='NO'){
        var res=response.data;        
          // Store the token and navigate to the main app screen
          // For example, using AsyncStorage and navigation:
          // await 
         await AsyncStorage.setItem('GSID', res.id.toString());
         await AsyncStorage.setItem('GSGRP', res.grp.toString());
        await  AsyncStorage.setItem('GSLIBID', res.libid.toString());
          navigation.navigate('Mylib');
          console.log('Login successful');
          console.log(res)
        } else {
         Alert.alert("Wrong combination. Try again!");
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
       <View style={styles.logoContainer}>
        <Image
          source={calligraphicLogo}
          style={styles.calligraphicLogo}
        />
      </View>
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
 <Image
        source={logo}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:0,
    marginTop:0,
  },
    calligraphicLogo: {
      marginBottom:20,
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
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
