import * as type from "../constants";

export const signin = payload => ({
  type: type.SIGNIN_REQUESTED,
  payload
});
