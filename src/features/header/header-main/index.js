//@flow

import React, { Component } from "react";
import isEqual from "lodash/isEqual";
import { Title, Wrapper } from "./styled-components";
import { MainNav } from "./navigation";
import { Highlight } from "../../../elements/highlight";
import { Skewify } from "../../../elements/skewify";
import { MobileMenuButton } from "../../../elements/mobile-menu-button";
import theme from "../../../global/style/mainTheme";
import addActiveState from "../../../global/hoc/addActiveState";

type props = {
  openMobileNav: () => mixed,
  closeMobileNav: () => mixed,
  ui: {
    mobileMenuIsOpen: boolean,
    breakpoints: {
      main: string
    }
  }
};

const ActiveTitle = addActiveState(Title);

export const HeaderMain = (props: props) =>
  <Wrapper>
    {props.ui.breakpoints.main.width === "mobile" &&
      <MobileMenuButton {...props} />}
    <ActiveTitle>
      <Highlight url="/" highlightColor="transparent">
        Oliver <Skewify>Askew</Skewify>
      </Highlight>
    </ActiveTitle>
    {props.ui.breakpoints.main.width === "desktop" && <MainNav {...props} />}
  </Wrapper>;
