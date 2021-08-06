import axios from "axios";
import { Dispatch } from "redux";
import { authActionTypes } from "../action-types/auth.action-types";
import {
  AuthErrorAction,
  LoadUserAction,
  LoginFailAction,
  LoginSuccessAction,
  LogoutAction,
  RegisterFailAction,
  RegisterSucessAction,
} from "../actions/auth.actions";
import { ErrorAlert } from "../interfaces/Alert.interface";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

// REGISTER USER
export const register =
  (username: String, email: String, password: String) =>
  async (dispatch: Dispatch<RegisterSucessAction | RegisterFailAction>) => {
    const body = {
      username,
      email,
      password,
    };
    try {
      const res = await axios.post("/auth/register", body);
      dispatch({
        type: authActionTypes.REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser() as any);
    } catch (err) {
      const error = err.response.data.message;
      if (error) {
        dispatch(setAlert(error) as any);
      }
      dispatch({
        type: authActionTypes.REGISTER_FAIL,
      });
    }
  };

// LOGIN USER
export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<LoginSuccessAction | LoginFailAction>) => {
    const body = { email, password };

    try {
      // WE WANT TO LOGIN
      console.log("start try");
      const res = await axios.post("/auth/login", body);
      console.log("nope");
      dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser() as any);
    } catch (err) {
      const error = err.response.data.message;
      if (error) {
        dispatch(setAlert(error) as any);
      }
      dispatch({
        type: authActionTypes.LOGIN_FAIL,
      });
    }
  };

export const loadUser =
  () => async (dispatch: Dispatch<LoadUserAction | AuthErrorAction>) => {
    // check local storage, set the new token
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/auth/profile");
      console.log(res.data);
      // payload is the user information
      dispatch({
        type: authActionTypes.USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: authActionTypes.AUTH_ERROR,
      });
    }
  };

export const logout = () => (dispatch: Dispatch<LogoutAction>) => {
  dispatch({ type: authActionTypes.LOGOUT });
};
