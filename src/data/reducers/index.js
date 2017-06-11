//@flow

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import cards from "./cards";
import ui from "../ui/reducers";

export default combineReducers({
  ui,
  cards,
  router: routerReducer
});
