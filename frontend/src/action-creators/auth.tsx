import axios from "axios";
import { Dispatch } from "redux";

export const register =
  (
    username: String,
    email: String,
    password: String,
    confirmPassword: String
  ) =>
  async (dispatch: Dispatch) => {
    if (password !== confirmPassword) {
      //set an alert
      return;
    }
    const body = {
      username,
      email,
      password,
    };
    try {
      const res = await axios.post("/auth/register", body);
      // dispatch the data
    } catch (e) {}
  };
