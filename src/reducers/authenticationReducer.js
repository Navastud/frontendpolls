import * as types from "../constants/ActionsType";
const INITIAL_STATE = {
  currentUser: undefined,
  isAuthenticated: false,
  loading: false,
  hasError: false,
  message: ""
};

const authentication = (state = INITIAL_STATE, action) => {
  const response = action.response;

  switch (action.type) {
    case types.SIGNIN_REQUESTED:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        hasError: false,
        message: ""
      };
    case types.SIGNIN_SUCCEEDED:
      return {
        ...state,
        currentUser: Object.assign({}, response),
        loading: false,
        isAuthenticated: true,
        hasError: false
      };
    case types.SIGNIN_FAILED:
      return {
        ...state,
        message: response,
        loading: false,
        hasError: true,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default authentication;
