import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

const LoginScreen = ({ navigation, setLoggedIn }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Implement your logic for fake authentication here
    // For now, just navigate to the Home screen

    if (!username) {
      Alert.alert("Please enter a username");
      return;
    }
    setLoggedIn(true);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
