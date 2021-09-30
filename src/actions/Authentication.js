import { AUTHENTICATION } from "./actionTypes";

export const Authentication = (bool) => ({
  type: AUTHENTICATION,
  bool,
});
