import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import G from '../G.json'; 
import { Picker } from '@react-native-picker/picker';
import Footer from '../components/Footer';
import Imagine from '../contexts/Imagine';
import API_ENDPOINTS from '../utils/apiConfig'; 
import useGlobalStyles from '../contexts/useGlobalStyles';

const Profile = ({ route, navigation}) => {
const { gsid } = route.params || {};
console.log("gsid:"+gsid)
  const [userData, setuserData] = useState({
    uri:'',img:'',title: '',name:'',mail:'',firstname:'',lastname:'',content:'',lang:'',
  });
const { selectPhoto, takePhoto } = Imagine(gsid, setuserData,'user');

 useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_USER(gsid));
           var userDetails = response.data[0];
        console.log(userDetails)
        setuserData(userDetails);
        navigation.setOptions({ title: (userDetails.name!='' ? userDetails.name:gsid)  });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUser();
  }, [gsid, navigation]);

 const handleChange = (field, value) => {
    setuserData(prevState => ({
      ...prevState,
      [field]: value,
    }));
    // POST request to update user details dynamically
    axios.post(API_ENDPOINTS.EDIT('user'), {
      key: field,
      value: value,
      id: gsid,
    })
    .then(response => {
      console.log('Book details updated successfully:', response.data);
    })
    .catch(error => {
      console.error('Error updating book details:', error);
    });
  };
  const globalStyles=useGlobalStyles();
 return (
    <ScrollView contentContainerStyle={globalStyles.container}>      
     <View style={styles.imageContainer}>
        <Image
          source={{ uri: userData.uri }}
          style={styles.featureImage}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.menuButton} onPress={selectPhoto}>
            <Ionicons name="images" size={30} color={globalStyles.colorButton} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={takePhoto}>
            <Ionicons name="camera" size={30} color={globalStyles.colorButton} />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.fieldContainer}>
        <Text style={globalStyles.label}>Userame:</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          onChangeText={text => handleChange('name', text)}
        />
      </View>
              <View style={styles.fieldContainer}>
        <Text style={globalStyles.label}>Mail:</Text>
        <TextInput
          style={styles.input}
          value={userData.mail}
          onChangeText={text => handleChange('mail', text)}
        />
      </View>
                    <View style={styles.fieldContainer}>
        <Text style={globalStyles.label}>Firstname:</Text>
        <TextInput
          style={styles.input}
          value={userData.firstname}
          onChangeText={text => handleChange('firstname', text)}
        />
      </View>
                    <View style={styles.fieldContainer}>
        <Text style={globalStyles.label}>Lastname:</Text>
        <TextInput
          style={styles.input}
          value={userData.lastname}
          onChangeText={text => handleChange('lastname', text)}
        />
      </View>
       <View style={styles.fieldContainer}>
        <Text style={globalStyles.label}>Link:</Text>
        <TextInput
          style={styles.input}
          value={userData.link}
          onChangeText={text => handleChange('link', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={globalStyles.label}>Bio:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={userData.content}
          onChangeText={text => handleChange('content', text)}
          multiline
        />
      </View>
            <Footer navigation={navigation} />   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  featureImage: {
    width: '70%',
    height: 200,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
    marginLeft: 10,
  },
    menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
   featureImage: {
    width: '50%',
    height: 200,
    marginBottom: 10,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
  },
});

export default Profile;