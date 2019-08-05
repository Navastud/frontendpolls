import axios from "axios";
import { ACCESS_TOKEN, TOKEN_TYPE } from "../constants";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept"
  }
});

const AUTH_TOKEN = localStorage.getItem(ACCESS_TOKEN);
const AUTH_TOKEN_TYPE = localStorage.getItem(TOKEN_TYPE);

if (AUTH_TOKEN && AUTH_TOKEN_TYPE) {
  instance.defaults.headers.common["Authorization"] =
    AUTH_TOKEN_TYPE + " " + AUTH_TOKEN;
}

export default instance;
