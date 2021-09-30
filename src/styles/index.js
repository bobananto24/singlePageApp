import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, SCREEN } from "../constants";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    width: SCREEN.WIDTH,
  },
  container: {
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    height: "100%",
  },
  subContainer: {
    flex: 1,
    width: "100%",
    padding: RFValue(10),
  },
});
