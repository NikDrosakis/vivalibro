import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const MylibCard = ({ item, index, deletePhoto }) => {
  return (
    <View style={styles.photoContainer}>
      <Image source={item.uri} style={styles.photo} />
      <Text style={styles.writerText}>{item.writer}</Text>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.editorText}>{item.editor}</Text>
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
