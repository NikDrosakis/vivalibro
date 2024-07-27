import React, { useState,useEffect } from 'react';
import { View, Button, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
    import axios from 'axios';
import API_ENDPOINTS from '../utils/apiConfig'; 
const Autocomplete = ({ type, bookId, value, valueid }) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState({});
  const [selectedValue, setSelectedValue] = useState('');
  const [isNew, setisNew] = useState(false);
    const [selectedId, setSelectedId] = useState(valueid);
  useEffect(() => {
    setQuery(value);
    setSelectedId(valueid);
  }, [value, valueid]);
  
 const handleInputChange = async (text, type, setSuggestions) => {
    setQuery(text);
  if (text.length > 1) {
    try {
      const response = await axios.get(API_ENDPOINTS.LOOKUP(type), {
        params: { q: text }
      });
      console.log(response.data)
      if (text.length > 3 && response.data.length === 0) {
        console.log("here we are")
        setSuggestions([]);
        setisNew(true);
      }else{
        console.log(response.data)
      setSuggestions(response.data);
      setisNew(false);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  } else {
    setSuggestions([]);
  }
};

const handleSelectSuggestion = async (item, type, setQuery, setSelectedValue, bookId) => {
  setQuery(item.name);  
  setSelectedValue(item.id); 
  try {
    const response = await axios.post(API_ENDPOINTS.LOOKUPSAVE('book'), {
        id: bookId,
        key:type,
        value:item.id,
    });
    console.log('Save response:', response.data);
    if(response.data=='OK'){
       setSuggestions([]);
    }else{
       console.error('Error saving selected value:', error);
    }
  } catch (error) {
    console.error('Error saving selected value:', error);
  }
};
 const handleSaveNew = async () => {
  try {
console.log( {
        id: bookId,
        key:type,
        value:query,
    })
    const response = await axios.post(API_ENDPOINTS.SAVENEW('book'), {
        id: bookId,
        key:type,
        value:query,
    });
   if (response.data.affectedRows === 1) {
        console.log("Successfully inserted");
        setisNew(false);
      } else {
        console.error('Error saving new item:', response.data);
      }
    } catch (error) {
      console.error('Error saving new item:', error);
    }
}; 
  return (
    <View>
      <Text style={styles.label}>{type}:</Text>
 {isNew && (
          <Button title="New" onPress={handleSaveNew} />
        )}
      <TextInput
        style={styles.input}
        value={query}
        valueid={valueid}
        onChangeText={(text) => handleInputChange(text, type, setSuggestions)}
        placeholder={`Search ${type}`}
      />
  {Object.keys(suggestions).length > 0 && (
  <FlatList
    style={styles.suggestionList}
    data={Object.entries(suggestions)}
    keyExtractor={([key, value]) => value.toString()}
    renderItem={({ item: [name, id] }) => (
      <TouchableOpacity onPress={() => handleSelectSuggestion({ name, id }, type, setQuery, setSelectedValue, bookId)}>
        <Text style={styles.suggestionItem}>
          {name}
        </Text>
      </TouchableOpacity>
    )}
  />
)}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  suggestionList: {
    maxHeight: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  }
});

export default Autocomplete;
