//@flow

import React from "react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../global/style/mainTheme";

import HeaderMain from "./header-main";

export default ({ ...props }: {}): React$Element<*> => (
  <ThemeProvider theme={mainTheme}>
    <HeaderMain />
  </ThemeProvider>
);
