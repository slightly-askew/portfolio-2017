//@flow

import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import reducers from "./data/reducers";

const defaultState = {};

export const history = createHistory();

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(routerMiddleware(history))
);

const store = createStore(reducers, defaultState, enhancers);

export default store;
