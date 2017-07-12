//@flow

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import cards from "./cards";
import ui from "../ui/reducers";
import mainNavigation from "./mainNavigation";

export default combineReducers({
  ui,
  cards,
  mainNavigation,
  router: routerReducer
});
