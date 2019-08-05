import { combineReducers } from "redux";
import authentication from "./authenticationReducer";

const rootReducers = combineReducers({ authentication });

export default rootReducers;
