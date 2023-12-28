// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to Test Page" onPress={() => navigation.navigate('Test')} />
    </View>
  );
};

export default HomeScreen;
