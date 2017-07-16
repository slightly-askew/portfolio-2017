//@flow

import React from "react";
import { Background } from "./styled-components";
import { componentQuery } from "./componentQueries";
import wrapWithComponentQuery from "../../global/hoc/wrapWithComponentQuery";
import { compose } from "recompose";
import { MainNav } from "../../elements/navigation-main";

type props = {
  ui: {
    mobileMenuIsOpen: boolean
  }
};

const enhance = compose(componentQuery, wrapWithComponentQuery("mobileMenu"));

export const MobileMenu = enhance((props: props) =>
  <Background>
    {props.ui.mobileMenuIsOpen && <MainNav {...props} />}
  </Background>
);
