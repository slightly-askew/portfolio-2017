//@flow
import React from "react";

import { Ul, Li, Nav } from "./styled-components";
import { LinkedInIcon } from "../../../../elements/linkedin-icon";
import { OctocatIcon } from "../../../../elements/octocat-icon";
import { Highlight } from "../../../../elements/highlight";
import { Chevron } from "../../../../elements/chevron";
import Bubble from "../../../../elements/bubble";
import theme from "../../../../global/style/mainTheme";
import addActiveState from "../../../../global/hoc/addActiveState";

const ActiveLi = addActiveState(Li);

export const MainNav = (props: {}) => (
  <Nav>
    <Ul>
      <ActiveLi><Highlight {...props} url="/">Projects</Highlight></ActiveLi>
      <ActiveLi><Highlight {...props} url="/">About</Highlight></ActiveLi>
      <ActiveLi>
        <Chevron {...props}>Download</Chevron>
        <Bubble
          {...props}
          textItems={[
            { label: "Resume", target: "#" },
            { label: "Portfoliontopolov", target: "#" }
          ]}
        />
      </ActiveLi>
      <ActiveLi><Highlight {...props} url="/">Contact</Highlight></ActiveLi>
    </Ul>
    <Ul>
      <ActiveLi><LinkedInIcon /></ActiveLi>
      <ActiveLi><OctocatIcon /></ActiveLi>
    </Ul>

  </Nav>
);
