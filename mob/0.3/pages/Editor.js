import React from 'react';
import { View, Text } from 'react-native';

const Editor = ({ route }) => {
  const { editorId } = route.params; // Fetch the editorId parameter from navigation

  // Fetch editor details based on editorId (You can fetch from API or local storage)
  // Example: const editor = fetchEditorDetails(editorId);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Editor Details Screen</Text>
      <Text>Editor ID: {editorId}</Text>
      {/* Display other editor details */}
    </View>
  );
};

export default Editor;
