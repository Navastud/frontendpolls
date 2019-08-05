import axios from "./axios";
import { ACCESS_TOKEN, TOKEN_TYPE } from "../constants";

export const currentUserService = () => {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }
  return axios.get("/users/me").then(res => res.data);
};

export const signinService = request => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(TOKEN_TYPE);
  return axios.post("/auth/signin", request).then(res => res.data);
};
