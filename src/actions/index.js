import * as type from "../constants/ActionsType";

export const signin = payload => ({
  type: type.SIGNIN_REQUESTED,
  payload
});
