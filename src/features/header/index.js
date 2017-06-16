//@flow

import React from "react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../global/style/mainTheme";
import { detectWidth } from "./componentQueries";

import { HeaderMain } from "./header-main";

type props = {
  openMobileNav: () => mixed,
  closeMobileNav: () => mixed,
  ui: {
    mobileMenuIsOpen: boolean
  }
};

const HeaderMainCQ = detectWidth(HeaderMain);

export const Header = (props: props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <HeaderMainCQ {...props} />
    </ThemeProvider>
  );
};
