import React, {useEffect,useState} from 'react';
import { View, Text,Image,TextInput,StyleSheet,ScrollView } from 'react-native';
import API_ENDPOINTS from '../utils/apiConfig'; 
import axios from 'axios';
import Footer from '../components/Footer';

const Editor = ({ route, navigation}) => {
  const { editorId, editorname } = route.params; 
      const [Data, setData] = useState({
    id:'',img:'',name: '',uri:'',
  });

 useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_BY_ID('editor',editorId));
           var Details = response.data[0];
        console.log(Details)
        setData(Details);
        navigation.setOptions({ title: (Details.name!='' ? Details.name: 'Editor '+Details.id)  });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchDetails();
  }, [editorId, navigation]);

const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value,
    }));
    axios.post(API_ENDPOINTS.EDIT('editor'), {
      key: field,
      value: value,
      id: editorId,
    })
    .then(response => {
      console.log('Book details updated successfully:', response.data);
    })
    .catch(error => {
      console.error('Error updating book details:', error);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Image 
        source={{uri:Data.uri}}
        style={styles.featureImage}
      />
      <Text>Editor Details Screen</Text>
      <Text>Editor ID: {Data.id}</Text>
        <Text>Editor Name: {Data.name}</Text>
       <View style={styles.fieldContainer}>
        <Text style={styles.label}>Volume:</Text>
        <TextInput
          style={styles.input}
          value={Data.name}
          onChangeText={text => handleChange('name', text)}
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
export default Editor;
