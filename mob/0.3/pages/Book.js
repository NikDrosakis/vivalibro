import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import G from '../G.json'; 
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import * as Device from 'expo-device';
import Footer from '../components/Footer';
  
const Book = ({ route, navigation }) => {
   // const { id, title } = route.params;
  const { bookId } = route.params;
  const [isNewWriter, setisNewWriter] = useState(false);
  const [isNewEditor, setisNewEditor] = useState(false);
  const [isNewCat, setisNewCat] = useState(false);
  const [bookData, setBookData] = useState({
    uri:'',
    img:'',
    title: '',
    writer: '',
    writername:'',
    editorname:'',
    writerId:'',
    editor: '',
    editorId:'',
    edited: '',
    category: '',
    status: '',
    volume: '',
    tags: '',
    summary: '',
  });
  
 useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://vivalibro.com:3002/ma/book/id/${bookId}`);
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

    if (field === 'writer' || field === 'editor' || field === 'category') {
      setShowNewButtons(prevState => ({
        ...prevState,
        [field]: value.trim() === '',
      }));
    }

    // POST request to update book details dynamically
    axios.post('https://vivalibro.com:3002/bookedit', {
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
  
const openImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
          const formData = new FormData();
         const sourcefile = result.assets[0].uri;
         const imgName = sourcefile.split('/').pop();
    formData.append('file', {
      uri: sourcefile,
      name: imgName,
      type: 'image/jpeg', 
    });
    formData.append('table', 'book'); // Specify your table name
    formData.append('img', imgName); // Image name or identifier
    formData.append('id', bookId); // Book ID or other identifier
    const upload = await axios.post('https://vivalibro.com:3002/upload/book/img/now', formData,{
             headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       console.log(upload.data);
    if(upload.data.affectedRows==1){
      setBookData(prevState => ({
        ...prevState,
        uri: result.assets[0].uri,
      }));
    }
    }else{
      console.log("Upload to Server unsuccessful");
    }
  };

const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
console.log(result);
    if (!result.cancelled) {
      setBookData((prevState) => ({
        ...prevState,
        uri: result.assets[0].uri,
      }));

      // Upload the photo to the server
      const formData = new FormData();
        const sourcefile = result.assets[0].uri;
      const imgName = sourcefile.split('/').pop();

      formData.append('file', {
        uri: sourcefile,
        name: imgName,
        type: 'image/jpeg', // Ensure this matches your image type
      });
      formData.append('table', 'book'); // Specify your table name
      formData.append('img', imgName); // Image name or identifier
      formData.append('id', bookId); // Book ID or other identifier

      try {
        const upload = await axios.post('https://vivalibro.com:3002/upload/book/img/now', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Upload response:', upload.data);
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  };

 const callSerpApi = async (imageUri) => {
    const deviceModel = Device.modelName;
    const systemName = Device.osName;
    const appVersion = Device.osVersion;
    const ua = `Mozilla/5.0 (${systemName}; ${deviceModel} Build/${appVersion}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36`;

    try {
      const response = await axios.get('https://serpapi.com/search.json', {
        params: {
          engine: 'google_lens',          api_key:'c070a5c543d6aa0734b815fb1583bd729327470c2c03e1a85daa1937a54ac5f7',
   //       device: "mobile",
          hl: "el",
          country:"gr",
          no_cache:true,
          url: imageUri
        },
        headers: {
          'User-Agent': ua
        }
      });
      console.log(response.data)
      if (response.data.visual_matches.length > 0) {
        //  setData(response.data);
        var reply= response.data[0];
        var content={title:reply.title,link:reply.link,price:reply.price.extracted_value,in_stock:reply.in_stock,source:reply.source}
      } else {
        console.log('No book detected. Please place a book in front of the camera.');
      }
    } catch (error) {
      console.error('Error checking image with SerpAPI:', error);
    }
  };


   return (
    <ScrollView contentContainerStyle={styles.container}>      
     <Image 
        source={{uri:bookData.uri}}
        style={styles.featureImage}
      />
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={openImagePicker}>
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
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Writer:</Text>
          {isNewWriter ? (
          <Button title="New" onPress={handleSave} />
        ) : null}
        <TextInput
          style={styles.input}
          value={bookData.writername}
           onFocus={() => setisNewWriter(true)}
          onChangeText={text => {handleChange('writername', text)}}
        />
        {/* You can implement a dropdown or suggestions here */}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Editor:</Text>
         {isNewEditor ? (
          <Button title="New" onPress={handleSave} />
        ) : null}
        <TextInput
          style={styles.input}
              onFocus={() => setisNewEditor(true)}
          value={bookData.editorname}
          onChangeText={text => handleChange('editorname', text)}
        />
        {/* You can implement a dropdown or suggestions here */}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Edition Year:</Text>
        <TextInput
          style={styles.input}
          value={bookData.edited}
          onChangeText={text => handleChange('edited', text)}
          keyboardType="numeric"
          placeholder="YYYY"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Category:</Text>
         {isNewCat ? (
          <Button title="New" onPress={handleSave} />
        ) : null}
        <TextInput
          style={styles.input}
          value={bookData.category}
              onFocus={() => setisNewCat(true)}
          onChangeText={text => handleChange('category', text)}
        />
        {/* You can implement a dropdown or suggestions here */}
      </View>
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
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
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
