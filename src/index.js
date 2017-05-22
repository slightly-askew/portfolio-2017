//@flow
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter as Router } from "react-router-redux";

import store, { history } from "./store";

import App from "./App";

declare var module: {
  hot: {
    accept(path: Class<React$Component<*, *, *>>, callback: () => void): void
  }
};

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Component} />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept(App, () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
