import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import * as Device from 'expo-device';
import API_ENDPOINTS from '../utils/apiConfig'; 

const Imagine = (id, setData,table) => {
  const handleImageUpload = async (result) => {
    if (!result.canceled) {
      const formData = new FormData();
      const sourcefile = result.assets[0].uri;
      const imgName = sourcefile.split('/').pop();

      formData.append('file', {
        uri: sourcefile,
        name: imgName,
        type: 'image/jpeg',
      });
      formData.append('table', table);
      formData.append('img', imgName);
      formData.append('id', id);

      try {
        const upload = await axios.post(API_ENDPOINTS.UPLOAD_IMAGE(table), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Upload response:', upload.data);

        if (upload.data.affectedRows === 1) {
          setData((prevState) => ({
            ...prevState,
            uri: result.assets[0].uri,
          }));
        } else {
          console.log('Upload to Server unsuccessful');
        }
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  };

  const selectPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2,3],
      quality: 1,
    });

    await handleImageUpload(result);
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
      aspect: [2, 3],
      quality: 1,
    });

    await handleImageUpload(result);
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

  return {
    selectPhoto,
    takePhoto,
    callSerpApi,
  };
};

export default Imagine;
