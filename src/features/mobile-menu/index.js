//@flow

import React from "react";
import theme from "../../global/style/mainTheme";
import { Background } from "./styled-components";
import { componentQuery } from "./componentQueries";
import wrapWithComponentQuery from "../../global/hoc/wrapWithComponentQuery";
import { compose, onlyUpdateForKeys } from "recompose";
import { MainNav } from '../../elements/navigation-main';

type props = {};

const enhance = compose(componentQuery, wrapWithComponentQuery("mobileMenu"));

export const MobileMenu = enhance((props: props) => (
  <Background>
    <MainNav {...props}/>
  </Background>));
