//@flow

import React from "react";
import { Title, Wrapper } from "./styled-components";
import { DesktopNav } from "./nav-main/desktop";
import { LinkedInLogo } from "../../../elements/linkedin-icon";

export const HeaderMain = (props: {}): React$Element<*> => (
  <Wrapper>
    <Title>Oliver Askew</Title>
    <DesktopNav {...props} />
    <LinkedInLogo {...props} />
  </Wrapper>
);
