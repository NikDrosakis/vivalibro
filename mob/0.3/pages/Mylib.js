import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button, TextInput  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MylibCard from '../components/MylibCard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
  import Footer from '../components/Footer';


export default function Mylib({ navigation }) {
  const [bookList, setBookList] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getBookList();
  }, []);

  const getBookList = async (query = '') => {
    try {
      const response = await axios.get('https://vivalibro.com:3002/ma/lib/id/1', {
        params: { q: query },
      });
      if (response.data) {
        const books = response.data.map((item) => ({
          uri: item.uri,
          id: item.id,
          title: item.title,
          writer: item.writername,
          editor: item.editorname,
        }));
        setBookList(books);
      } else {
        console.log('No book detected. Please place a book in front of the camera.');
      }
    } catch (error) {
      console.error('Error loading library:', error);
    }
  };

   const handleSearch = (query) => {
    setSearchQuery(query);
    getBookList(query);
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('GSID');await AsyncStorage.removeItem('GSGRP');await AsyncStorage.removeItem('GSLIBID');
    navigation.navigate('Login');
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.menuButton} onPress={() => setSearchVisible(!searchVisible)}>
          <Ionicons name="search" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, searchVisible]);

 const handleCreateNewBook = async () => {
    try {
      // First POST request to create a new book
      const response = await axios.post('https://vivalibro.com:3002/newbook', { });
      console.log(response.data);
      if(response.data.affectedRows==1){
      const newBookId = response.data.insertId;
      // Second POST request to assign the book to the user
        const gslibid = await AsyncStorage.getItem('GSLIBID');
        console.log({ bookid: newBookId, libid:gslibid })
       const response2 = await axios.post('https://vivalibro.com:3002/bookuser', { bookid: newBookId, libid:gslibid });
      // Navigate to the Book screen with the new bookId
      if(response2.data.affectedRows==1){
       navigation.navigate('Book', { bookId: newBookId });
      }else{
        console.log("Response2 not correct");
      } 
      }else{ console.log("Book not writen")}
    } catch (error) {
      console.error('Error creating new book:', error);
    }
  };

  return (
    <View style={styles.container}>
{searchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={bookList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <MylibCard item={item} index={index} />
          )}
        />
      </View>
      <Footer navigation={navigation} />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: wp('100%'),
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    width: wp('100%'),
  },
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
