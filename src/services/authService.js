import axios from "axios";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;

export const login = async (credential) => {
  const response = await axios.post(API_URL, { token: credential });
  return response.data;
};
