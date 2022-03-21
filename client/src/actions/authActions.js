import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import cors from "cors";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';

import { message } from "antd"

//No API for signup  was provided

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData, { mode: cors })
    .then((res) => history.push("/login"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//login user
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/auth/login", userData, { mode: cors })
    .then((res) => {
      const { token } = res.data.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      toast.success("You have successfully logged in!")
    })
    .catch((err) =>
      {dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
      toast.warn(err.response.data)
    }
    );
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//log user out
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  window.location.href = "/login";
  toast.success("You have successfully logged out.")
};
