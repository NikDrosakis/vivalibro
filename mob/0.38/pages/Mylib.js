import React, { useCallback,useState, useEffect } from 'react';
import { View, Text, SafeAreaView,ActivityIndicator, TouchableOpacity, FlatList, StyleSheet, Button, TextInput  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MylibCard from '../components/MylibCard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from '../components/Footer';
import API_ENDPOINTS from '../utils/apiConfig'; 
import { useFocusEffect } from '@react-navigation/native';
import useGlobalStyles from '../contexts/useGlobalStyles';

export default function Mylib({ navigation }) {
  const [bookList, setBookList] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
 const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    useCallback(() => {
     getBookList('')
    }, [getBookList])
  );

const getBookList = async (query = '',newPage=1) => {
    setLoading(true);
    try {
      const response = await axios.get(API_ENDPOINTS.GET_BOOKS_BY_LIB(1), {
       params: { q: query, page: newPage },
      });
      if (response.data) {
        const books = response.data;
        console.log(books)
       setBookList(prevBooks => newPage === 1 ? books : [...prevBooks, ...books]);  
      } else {
        console.log('No book detected. Please place a book in front of the camera.');
      }
    } catch (error) {
      console.error('Error loading library:', error);
    }
    setLoading(false);
};
const handleLoadMore = () => {
    if (!loading) {
       setPage(prevPage => prevPage + 1);
      getBookList(searchQuery, page + 1);
    }
  };

   const handleSearch = (query) => {
    setSearchQuery(query);
     setPage(1);
    getBookList(query, 1);
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
      const response = await axios.post(API_ENDPOINTS.NEWBOOK, { });
      console.log(response.data);
      if(response.data.affectedRows==1){
      const newBookId = response.data.insertId;
      // Second POST request to assign the book to the user
        const gslibid = await AsyncStorage.getItem('GSLIBID');
        console.log({ bookid: newBookId, libid:gslibid })
       const response2 = await axios.post(API_ENDPOINTS.BOOKUSER_ASSIGN, { bookid: newBookId, libid:gslibid });
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

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
    const globalStyles=useGlobalStyles();
  return (
    <View style={globalStyles.container}>
{searchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      )}
       <SafeAreaView style={styles.listContainer}>
        <FlatList
            ListFooterComponent={renderFooter}
          data={bookList}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <MylibCard item={item} index={index} />
          )}
        />
      </SafeAreaView>
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
 loader: {
    padding: 10,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    width: wp('100%'),
  },
    menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
