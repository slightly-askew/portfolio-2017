import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./scenes/Main";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Main />, div);
});

it("renders a snapshot", () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});
