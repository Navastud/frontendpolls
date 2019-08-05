import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../constants/ActionsType";
import {
  currentUserService,
  signinService
} from "../services/athenticationServices";
import { ACCESS_TOKEN, TOKEN_TYPE } from "../constants";

function* signin(action) {
  try {
    const { payload } = action;
    const res = yield call(signinService, payload);

    localStorage.setItem(ACCESS_TOKEN, res.accessToken);
    localStorage.setItem(TOKEN_TYPE, res.tokenType);

    const response = yield call(currentUserService);

    yield put({ type: types.SIGNIN_SUCCEEDED, response });
  } catch (error) {
    const message = error.message;
    yield put({ type: types.SIGNIN_FAILED, message });
  }
}

export default function* authenticationSaga() {
  yield takeLatest(types.SIGNIN_REQUESTED, signin);
}
