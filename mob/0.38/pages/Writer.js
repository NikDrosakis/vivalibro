import React, {useEffect,useState} from 'react';
import { View, Text,Image,TextInput,StyleSheet,ScrollView } from 'react-native';
import axios from 'axios';
import API_ENDPOINTS from '../utils/apiConfig'; 
import Footer from '../components/Footer';

const Writer = ({ route,navigation }) => {
  const { writername,writerId } = route.params; 
        const [Data, setData] = useState({
    id:'',img:'',name: '',uri:''
  });

 useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_BY_ID('writer',writerId));
        var Details = response.data[0];
        console.log(Details)
        setData(Details);
        navigation.setOptions({ title: (Details.name!='' ? Details.name:writername)  });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchDetails();
  }, [writerId, navigation]);

 const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value,
    }));
    axios.post(API_ENDPOINTS.EDIT('writer'), {
      key: field,
      value: value,
      id: writerId,
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
      <Text>Writer Details Screen</Text>
      <Text>Writer ID: {Data.id}</Text>
        <Text>Writer Name: {Data.name}</Text>
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
export default Writer;
