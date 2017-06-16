//@flow

import React from "react";
import { pure, compose, withState, withHandlers } from "recompose";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../global/style/mainTheme";

import { Logo } from "./Logo";

const enhance = compose(
  withState("isActive", "setActive", false),
  withHandlers({
    addActive: props => () => props.setActive(true),
    rmActive: props => () => props.setActive(false)
  }),
  pure
);

export const OctocatIcon = enhance(
  ({
    addActive,
    rmActive,
    isActive,
    ...props
  }: {
    addActive: () => any,
    rmActive: () => any,
    isActive: boolean
  }) => (
    <ThemeProvider theme={mainTheme}>
      <a
        href="https://github.com/slightly-askew"
        onMouseEnter={addActive}
        onMouseLeave={rmActive}
      >
        <Logo isActive={isActive} />
      </a>
    </ThemeProvider>
  )
);
