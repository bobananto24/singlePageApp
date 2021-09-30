import { AUTHENTICATION } from "../actions/actionTypes";

const initialState = {
  isLogged: false,
};

export default Authentication = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return { ...state, isLogged: action.bool };
  }
  return state;
};
