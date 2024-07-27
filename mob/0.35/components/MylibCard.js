import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MylibCard = ({ item, index, deletePhoto }) => {
  const navigation = useNavigation();

  const navigateToBook = () => {
    navigation.navigate('Book', { bookId: item.id }); // Navigate to Book screen with bookId
  };

  const navigateToWriter = () => {
    navigation.navigate('Writer', { writername:item.writername, writerId: item.writerId }); // Navigate to Writer screen with writerId
  };

  const navigateToEditor = () => {
    navigation.navigate('Editor', { editorname:item.editorname,editorId: item.editorId }); // Navigate to Editor screen with editorId
  };

  const navigateToCat = () => {
    navigation.navigate('Cat', { catname:item.catname,cat: item.cat }); // Navigate to Editor screen with editorId
  };

  return (
    <View style={styles.photoContainer}>
      <Image source={{ uri: item.uri }} style={styles.photo} />
      <Text style={styles.writerText} onPress={navigateToWriter}>{item.writername}</Text>
      <Text style={styles.titleText} onPress={navigateToBook}>{item.title}</Text>
      <Text style={styles.editorText} onPress={navigateToEditor}>{item.editorname}</Text>
      <Text style={styles.catText} onPress={navigateToCat}>{item.catname}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deletePhoto(index)}>
        <Ionicons style={styles.deleteButtonText} name="trash" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    width:'100%',
    elevation: 2,
  },
  writerText: {
    fontSize: 14,
    color: '#333',
    padding:'1%',
    width: '24%',
  },
  titleText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    padding:'1%',
    width: '38%',
  },
  editorText: {
    fontSize: 12,
    color: '#333',
    padding:'1%',
    width: '8%',
  },
    catText: {
    fontSize: 12,
    color: '#333',
    padding:'1%',
    width: '8%',
  },
  photo: {
    height: 80,
    padding:'3%',
        width: '17%',
  },
  deleteButton: {
     backgroundColor: 'none',
    padding:'3%',
            width: '7%',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MylibCard;
