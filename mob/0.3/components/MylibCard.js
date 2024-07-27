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
    navigation.navigate('Writer', { writerId: item.writerId }); // Navigate to Writer screen with writerId
  };

  const navigateToEditor = () => {
    navigation.navigate('Editor', { editorId: item.editorId }); // Navigate to Editor screen with editorId
  };

  return (
    <View style={styles.photoContainer}>
      <Image source={{ uri: item.uri }} style={styles.photo} />
      <Text style={styles.writerText} onPress={navigateToWriter}>{item.writer}</Text>
      <Text style={styles.titleText} onPress={navigateToBook}>{item.title}</Text>
      <Text style={styles.editorText} onPress={navigateToEditor}>{item.editor}</Text>
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
    padding:'3%',
    width: '27%',
  },
  titleText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    padding:'3%',
    width: '42%',
  },
  editorText: {
    fontSize: 12,
    color: '#333',
    padding:'3%',
    width: '12%',
  },
  photo: {
    height: 80,
    padding:'3%',
        width: '17%',
  },
  metadataText: {
    flex: 1,
    flexWrap: 'wrap',
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
