import * as types from "../constants/ActionsType";

export const signin = payload => ({
  type: types.SIGNIN_REQUESTED,
  payload
});
