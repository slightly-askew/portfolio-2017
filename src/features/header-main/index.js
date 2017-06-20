//@flow

import React from "react";
import { Title, Wrapper } from "./styled-components";
import { MainNav } from "../../elements/navigation-main";
import { Highlight } from "../../elements/highlight";
import { Skewify } from "../../elements/skewify";
import { MobileMenuButton } from "../../elements/mobile-menu-button";
import addActiveState from "../../global/hoc/addActiveState";

type props = {
  openMobileNav: () => mixed,
  closeMobileNav: () => mixed,
  ui: {
    mobileMenuIsOpen: boolean,
    breakpoints: {
      main: {
        device: string
      }
    }
  }
};

const ActiveTitle = addActiveState(Title);

export const HeaderMain = (props: props) =>
  <Wrapper>
    {props.ui.breakpoints.main.device === "mobile" &&
      <MobileMenuButton {...props} />}
    <ActiveTitle>
      <Highlight url="/" highlightColor="transparent">
        Oliver <Skewify>Askew</Skewify>
      </Highlight>
    </ActiveTitle>
    {props.ui.breakpoints.main.device === "desktop" && <MainNav {...props} />}
  </Wrapper>;
