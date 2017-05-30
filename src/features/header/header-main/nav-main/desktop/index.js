//@flow
import React from "react";

import { Ul, Li, Nav } from "./styled-components";
import { LinkedInIcon } from "../../../../../elements/linkedin-icon";
import { Highlight } from "../../../../../elements/highlight";
import { Chevron } from "../../../../../elements/chevron";
import theme from "../../../../../global/style/mainTheme";

export const DesktopNav = (props: {}) => (
  <Nav>
    <Ul>
      <Li><Highlight {...props} url="/">Projects</Highlight></Li>
      <Li><Highlight {...props}>About</Highlight></Li>
      <Li>
        <Highlight highlightColor="transparent" {...props}>
          <Chevron {...props}>Download</Chevron>
        </Highlight>
      </Li>
      <Li><Highlight {...props}>Contact</Highlight></Li>
      <Li><LinkedInIcon /></Li>
    </Ul>
  </Nav>
);
