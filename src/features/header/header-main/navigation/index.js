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
      <ActiveLi><Highlight {...props}>About</Highlight></ActiveLi>
      <ActiveLi>
        <Highlight highlightColor="transparent" {...props}>
          <Chevron {...props}>Download</Chevron>

        </Highlight>
        <Bubble
          {...props}
          textItems={[
            { label: "Resume", target: "#" },
            { label: "Portfoliontopolov", target: "#" }
          ]}
        />
      </ActiveLi>
      <ActiveLi><Highlight {...props}>Contact</Highlight></ActiveLi>
    </Ul>
    <Ul>
      <ActiveLi><LinkedInIcon /></ActiveLi>
      <ActiveLi><OctocatIcon /></ActiveLi>
    </Ul>

  </Nav>
);
