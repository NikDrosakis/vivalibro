import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import G from '../G.json'; 
import { Picker } from '@react-native-picker/picker';
import Footer from '../components/Footer';
import Imagine from '../contexts/Imagine';
import API_ENDPOINTS from '../utils/apiConfig'; 
import Autocomplete from '../components/Autocomplete';
import YearPicker from '../components/YearPicker';
import useGlobalStyles from '../contexts/useGlobalStyles';
const Book = ({ route, navigation}) => {
   // const { id, title } = route.params;
  const { bookId } = route.params;
    const [suggestions, setSuggestions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [bookData, setBookData] = useState({
    uri:'',img:'',title: '',writer: '',writername:'',
    editorname:'',writerId:'',editor: '',editorId:'',
    published: '',cat: '',catname: '',status: '',volume: '',
    tags: '',summary: '',
  });
const { selectPhoto, takePhoto, callSerpApi } = Imagine(bookId, setBookData,'book');

 useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_BY_ID('book',bookId));
           var bookDetails = response.data[0];
        console.log(bookDetails)
        setBookData(bookDetails);
        navigation.setOptions({ title: (bookDetails.title!='' ? bookDetails.title:bookId)  });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBookDetails();
  }, [bookId, navigation]);

 const handleChange = (field, value) => {
    setBookData(prevState => ({
      ...prevState,
      [field]: value,
    }));

    if (field === 'writer' || field === 'editor' || field === 'cat') {
      setShowNewButtons(prevState => ({
        ...prevState,
        [field]: value.trim() === '',
      }));
    }

    // POST request to update book details dynamically
    axios.post(API_ENDPOINTS.EDIT('book'), {
      key: field,
      value: value,
      id: bookId,
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
    <ScrollView style={globalstyles.container}>      
     <Image 
        source={{uri:bookData.uri}}
        style={styles.featureImage}
      />
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={selectPhoto}>
          <Ionicons name="images" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={takePhoto}>
          <Ionicons name="camera" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={()=>{callSerpApi(bookData.uri)}}>
          <Ionicons name="color-wand" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={bookData.title}
          onChangeText={text => handleChange('title', text)}
        />
      </View>
      <Autocomplete type="writer" valueid={bookData.writer} value={bookData.writername} bookId={bookId} />
      <Autocomplete valueid={bookData.editor} value={bookData.editorname}  type="editor" bookId={bookId} />
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Publication Year:</Text>
 <YearPicker
        value={bookData.published}
        onChange={(year) => handleChange('published', year)}
      />
      </View>
      <Autocomplete valueid={bookData.cat} value={bookData.catname} type="cat" bookId={bookId} />
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Status:</Text>
         <Picker
          selectedValue={''+bookData.status}
          style={styles.input}
          onValueChange={itemValue => handleChange('status', itemValue)}
        >
          {Object.entries(G.book_status).map(([key, value]) => (
            <Picker.Item label={value} value={key} key={key} />
          ))}
        </Picker>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Volume:</Text>
        <TextInput
          style={styles.input}
          value={bookData.volume}
          onChangeText={text => handleChange('volume', text)}
        />
      </View>
       <View style={styles.fieldContainer}>
        <Text style={styles.label}>Link:</Text>
        <TextInput
          style={styles.input}
          value={bookData.link}
          onChangeText={text => handleChange('link', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          value={bookData.price}
          onChangeText={text => handleChange('price', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>In stock:</Text>
        <TextInput
          style={styles.input}
          value={bookData.in_stock}
          onChangeText={text => handleChange('in_stock', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Source:</Text>
        <TextInput
          style={styles.input}
          value={bookData.source}
          onChangeText={text => handleChange('source', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Tags:</Text>
        <TextInput
          style={styles.input}
          value={bookData.tags}
          onChangeText={text => handleChange('tags', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Summary:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={bookData.summary}
          onChangeText={text => handleChange('summary', text)}
          multiline
        />
      </View>
            <Footer navigation={navigation} />   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
   buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '80%',
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
  label: {
    fontSize: 16,
    marginBottom: 2,
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

export default Book;