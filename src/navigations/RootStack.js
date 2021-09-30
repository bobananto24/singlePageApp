import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../containers/Home";

const Stack = createStackNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default RootStack;
