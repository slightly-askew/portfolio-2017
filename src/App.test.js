import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./scenes/Main";

import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Main />
    </MemoryRouter>,
    div
  );
});

it("renders a snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Main />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
