//@flow

import React from "react";
import { Title, Wrapper } from "./styled-components";
import { DesktopNav } from "./nav-main/desktop";
import { LinkedInLogo } from "../../../elements/linkedin-icon";
import { Highlight } from "../../../elements/highlight";
import { Skewify } from "../../../elements/skewify";
import theme from "../../../global/style/mainTheme";

export const HeaderMain = (props: {}) => (
  <Wrapper>
    <Title>
      <Highlight url="/" highlightColor={theme.color.yellow}>
        Oliver <Skewify>Askew</Skewify>
      </Highlight>
    </Title>
    <DesktopNav {...props} />
    <LinkedInLogo {...props} />
  </Wrapper>
);
