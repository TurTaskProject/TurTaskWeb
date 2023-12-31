import axios from "axios";
import { axiosInstance } from "./AxiosConfig";

const baseURL = import.meta.env.VITE_BASE_URL;

// Function for user login
export const apiUserLogin = (data) => {
  return axiosInstance
    .post("token/obtain/", data)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

// Function for user logout
export const apiUserLogout = () => {
  axiosInstance.defaults.headers["Authorization"] = ""; // Clear authorization header
  localStorage.removeItem("access_token"); // Remove access token
  localStorage.removeItem("refresh_token"); // Remove refresh token
};

// Function for Google login
export const googleLogin = async (token) => {
  axios.defaults.withCredentials = true;
  let res = await axios.post(`${baseURL}auth/google/`, {
    code: token,
  });
  // console.log('service google login res: ', res);
  return await res;
};

// Function to register
export const createUser = async (formData) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${baseURL}user/create/`, formData);
    return response.data;
  } catch (e) {
    console.error("Error in createUser function:", e);
    throw e;
  }
};
