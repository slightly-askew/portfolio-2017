//@flow

import React from "react";
import { compose } from "recompose";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../global/style/mainTheme";
import { detectWidth } from "./componentQueries";
import wrapWithContainerQuery from "../../global/hoc/wrapWithContainerQuery";

import { HeaderMain } from "./header-main";

type props = {
  openMobileNav: () => mixed,
  closeMobileNav: () => mixed,
  ui: {
    mobileMenuIsOpen: boolean
  }
};

const addContainerQuery = compose(detectWidth, wrapWithContainerQuery("main"));

const HeaderMainCQ = addContainerQuery(HeaderMain);

export const Header = (props: props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <HeaderMainCQ {...props} />
    </ThemeProvider>
  );
};
