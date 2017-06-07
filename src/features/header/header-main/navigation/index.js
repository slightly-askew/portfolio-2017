//@flow
import React from "react";

import { Ul, Li, Nav } from "./styled-components";
import { LinkedInIcon } from "../../../../elements/linkedin-icon";
import { OctocatIcon } from "../../../../elements/octocat-icon";
import { Highlight } from "../../../../elements/highlight";
import { Chevron } from "../../../../elements/chevron";
import Bubble from "../../../../elements/bubble";
import theme from "../../../../global/style/mainTheme";

export const MainNav = (props: {}) => (
  <Nav>
    <Ul>
      <Li><Highlight {...props} url="/">Projects</Highlight></Li>
      <Li><Highlight {...props}>About</Highlight></Li>
      <Li>
        <Highlight highlightColor="transparent" {...props}>
          <Chevron {...props}>Download</Chevron>
          <Bubble
            {...props}
            textItems={[
              { label: "Resume", target: "#" },
              { label: "Portfoliontopolov", target: "#" }
            ]}
          />
        </Highlight>
      </Li>
      <Li><Highlight {...props}>Contact</Highlight></Li>
    </Ul>
    <Ul>
      <Li><LinkedInIcon /></Li>
      <Li><OctocatIcon /></Li>
    </Ul>

  </Nav>
);
