import React from 'react';
import { View, Text } from 'react-native';

const Writer = ({ route }) => {
  const { writerId } = route.params; // Fetch the writerId parameter from navigation

  // Fetch writer details based on writerId (You can fetch from API or local storage)
  // Example: const writer = fetchWriterDetails(writerId);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Writer Details Screen</Text>
      <Text>Writer ID: {writerId}</Text>
      {/* Display other writer details */}
    </View>
  );
};

export default Writer;
