//@flow

import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import reducers from "./data/reducers";
import cards from "./data/state/cards";
import ui from "./data/ui";

const defaultState = { cards, ui };
export const history = createHistory();

const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(...middlewares)
);

const store = createStore(reducers, defaultState, enhancers);

if (module.hot) {
  module.hot.accept("./data/reducers", () => {
    store.replaceReducer(reducers);
  });
}

export default store;
