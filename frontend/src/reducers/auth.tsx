import { authActionTypes } from "../action-types/auth.action-types";
import { AuthState } from "../interfaces/Auth.interface";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null, // to set true or false
  isLoading: true,
  user: null, // want to make sure that loading is done and get a response
};

const authReducer = (
  state = initialState,
  action: { type: any; payload: any }
): AuthState => {
  const { type, payload } = action;
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
      // set localstorage item
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
