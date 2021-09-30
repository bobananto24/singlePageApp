import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import store from "./src/store";
import { styles } from "./src/styles";
import Toast from "react-native-toast-message";

const reduxProvider = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <App />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
    </Provider>
  );
};
export default reduxProvider;
