//@flow

import React from "react";
import { compose, withState, withHandlers } from "recompose";

import { Underline } from "./styled-components/Underline";
import { Li } from "./styled-components/ListTypes";

const enhance = compose(
  withState("isActive", "setActive", false),
  withHandlers({
    addActive: props => () => props.setActive(true),
    rmActive: props => () => props.setActive(false)
  })
);

export const ListItem = enhance(
  ({ children, addActive, isActive, rmActive }) => (
    <Li onMouseEnter={addActive} onMouseLeave={rmActive}>
      <Underline isActive={isActive}>{children}</Underline>
    </Li>
  )
);
