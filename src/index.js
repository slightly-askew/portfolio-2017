// @flow
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

import App from "./App";

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Component} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = App;
    render(NextApp);
  });
}
