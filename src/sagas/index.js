import { fork } from "redux-saga/effects";
import authenticationSaga from "./authenticationSaga";

export default function* rootSaga() {
  yield fork(authenticationSaga);
}
