import * as types from "../constants/ActionsType";

const INITIAL_STATE = {
  type: "info",
  message: "",
  description: ""
};

const notification = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.NOTIFICATION_REQUESTED:
      const { type, message, description } = payload;
      return { ...state, type, message, description };
    default:
      return state;
  }
};

export default notification;
