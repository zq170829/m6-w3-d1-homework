import * as actions from "./action";
import { combineReducers } from "redux";

const preference = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    default:
      return state;
  }
};

export default combineReducers({ preference });
