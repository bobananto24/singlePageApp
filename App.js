import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/navigations";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  useEffect(async () => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
