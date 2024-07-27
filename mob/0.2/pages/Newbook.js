import React, { useState, useRef, useEffect, startTransition } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Device from 'expo-device';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Newbook({ navigation }) {
      const apiKey ='c070a5c543d6aa0734b815fb1583bd729327470c2c03e1a85daa1937a54ac5f7'; 
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [bookList, setBookList] = useState([]);
  let cameraRef = useRef();

  useEffect(() => {
    // Request camera permission
    requestPermission();
  }, []);

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      const metadata = await MediaLibrary.getAssetInfoAsync(asset);
      await callSerpApi(photo.uri);
      startTransition(() => {
        setBookList((prevBookList) => [...prevBookList, { uri: photo.uri, metadata }]);
      });
      setShowCamera(false);
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
          engine: 'google_lens',
          api_key: apiKey,
          device: "mobile",
          url: imageUri
        },
        headers: {
          'User-Agent': ua
        }
      });
      if (response.data) {
        startTransition(() => {
          setData(response.data);
        });
      } else {
        console.log('No book detected. Please place a book in front of the camera.');
      }
    } catch (error) {
      console.error('Error checking image with SerpAPI:', error);
    }
  };

  return (
    <View style={styles.container}>
      {showCamera && (
        <View style={styles.cameraContainer}>
          <CameraView style={styles.camera} type={facing} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Ionicons name="videocam" size={50} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <Ionicons name="camera" size={50} color="gray" />
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={() => setShowCamera(true)}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: wp('100%'),
  },
  cameraContainer: {
    height: hp(50),
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    padding: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    flex: 0.3,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
