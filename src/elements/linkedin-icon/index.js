//@flow

import React from "react";
import { Link } from "react-router-dom";
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

export const LinkedInLogo = enhance(
  ({
    addActive,
    rmActive,
    isActive
  }: {
    addActive: () => any,
    rmActive: () => any,
    isActive: boolean
  }) => (
    <ThemeProvider theme={mainTheme}>
      <Link
        to="https://www.linkedin.com/in/oliver-askew-5791a333/"
        onMouseEnter={addActive}
        onMouseLeave={rmActive}
      >
        <Logo isActive={isActive} />
      </Link>
    </ThemeProvider>
  )
);
