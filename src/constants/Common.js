import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Toast from "react-native-toast-message";

export const SCREEN = {
  WIDTH: Dimensions.get("screen").width,
  HEIGHT: Dimensions.get("screen").height,
};

export const COLORS = {
  PRIMARY: "blue",
  OUTER_BACKGROUND: "green",
  BACKGROUND: "red",
};

export const CustomToast = (result, text) => {
  return result == true
    ? Toast.show({
        type: "success",
        position: "top",
        text1: text,
        topOffset: RFValue(50),
        visibilityTime: 1000,
      })
    : Toast.show({
        type: "error",
        position: "top",
        text1: text,
        topOffset: RFValue(50),
        visibilityTime: 1500,
      });
};
