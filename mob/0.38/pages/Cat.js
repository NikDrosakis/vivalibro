import React, {useEffect,useState} from 'react';
import { View, Text,Image,TextInput,StyleSheet,ScrollView } from 'react-native';
import axios from 'axios';
import API_ENDPOINTS from '../utils/apiConfig'; 
import Footer from '../components/Footer';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Cat = ({ route, navigation}) => {
  const { cat,catname } = route.params; 
    const [Data, setData] = useState({
    id:'',img:'',name: '',uri:''
  });
    const globalStyles = useGlobalStyles();
 useEffect(() => {
    const fetchCatDetails = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_BY_ID('cat',cat));
           var Details = response.data[0];
        console.log(Details)
        setData(Details);
        navigation.setOptions({ title: (Details.name!='' ? Details.name:cat)  });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchCatDetails();
  }, [cat, navigation]);

const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value,
    }));
    axios.post(API_ENDPOINTS.EDIT('cat'), {
      key: field,
      value: value,
      id: cat,
    })
    .then(response => {
      console.log('Book details updated successfully:', response.data);
    })
    .catch(error => {
      console.error('Error updating book details:', error);
    });
  };

  return (
    <ScrollView style={globalStyles.container}>
     <Image 
        source={{uri:Data.uri}}
        style={styles.featureImage}
      />
      <Text style={globalStyles.text}>Category Details Screen</Text>
      <Text style={globalStyles.text}>Category ID: {Data.id}</Text>
        <Text style={globalStyles.text}>Category Name: {Data.name}</Text>
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
export default Cat;
