//@flow

import React from "react";
import { pure, compose } from "recompose";
import { HeaderMain } from "../features/header-main";
import { MobileMenu } from "../features/mobile-menu";
import insertGlobalStyles from "../global/style/globalStyles";
import { ThemeProvider } from "styled-components";
import mainTheme from "../global/style/mainTheme";
import { MainWrapper } from "./styled-components";
import { componentQuery } from "./componentQueries";
import wrapWithComponentQuery from "../global/hoc/wrapWithComponentQuery";

insertGlobalStyles();

type props = {
  openMobileNav: () => mixed,
  closeMobileNav: () => mixed,
  ui: {
    mobileMenuIsOpen: boolean,
    breakpoints: {
      [string]: {
        [string]: mixed
      }
    }
  },
  [mixed]: mixed
};

const enhance = compose(componentQuery, wrapWithComponentQuery("main"));

const queryEffect = ({ queries, closeMobileNav }) =>
  queries.device === "desktop" && closeMobileNav();

const InnerComp = enhance((props: props) =>
  <MainWrapper
    mobileMenuIsOpen={props.ui.mobileMenuIsOpen}
    mobileMenuWidth={props.ui.breakpoints.mobileMenu.mobileMenuWidth}
  >
    <MobileMenu {...props} />
    <HeaderMain {...props} />
  </MainWrapper>
);

export const Main = (props: props) =>
  <ThemeProvider theme={mainTheme}>
    <InnerComp {...props} queryEffects={[queryEffect]} />
  </ThemeProvider>;
