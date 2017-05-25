//@flow

import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import reducers from "./data/reducers";
import cards from "./data/state/cards";

const defaultState = { cards };
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

export default function configureStore() {
  const store = createStore(reducers, defaultState, enhancers);

  if (module.hot) {
    module.hot.accept(reducers, () => {
      const nextRootReducer = require("./data/reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }
}
