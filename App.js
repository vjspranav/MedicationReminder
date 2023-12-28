// App.js
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";
import TestScreen from "./screens/TestScreen";

const Drawer = createDrawerNavigator();

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {
        loggedIn ? (
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
          {(props) => <SettingsScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Test" component={TestScreen} />
      </Drawer.Navigator>
        ) : (
          <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login">
              {(props) => <LoginScreen {...props} 
              setLoggedIn={setLoggedIn}
              />}
            </Drawer.Screen>
          </Drawer.Navigator>
        )
      }
    </NavigationContainer>
  );
}

export default App;
