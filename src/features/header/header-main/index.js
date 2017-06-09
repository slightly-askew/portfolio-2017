//@flow

import React from "react";
import { Title, Wrapper } from "./styled-components";
import { MainNav } from "./navigation";
import { Highlight } from "../../../elements/highlight";
import { Skewify } from "../../../elements/skewify";
import theme from "../../../global/style/mainTheme";
import addActiveState from "../../../global/hoc/addActiveState";

const ActiveTitle = addActiveState(Title);

export const HeaderMain = (props: {}) => (
  <Wrapper>
    <ActiveTitle>
      <Highlight url="/" highlightColor="transparent">
        Oliver <Skewify>Askew</Skewify>
      </Highlight>
    </ActiveTitle>
    <MainNav {...props} />
  </Wrapper>
);
