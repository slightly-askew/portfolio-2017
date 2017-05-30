import React from "react";
import { Header } from "../index";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";

test("header renders correctly", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Header />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
