//@flow
import React from "react";

import { Ul, Li, Nav } from "./styled-components";
import { LinkedInIcon } from "../linkedin-icon";
import { OctocatIcon } from "../octocat-icon";
import { Highlight } from "../highlight";
import { Chevron } from "../chevron";
import Bubble from "../bubble";
import addActiveState from "../../global/hoc/addActiveState";

const ActiveLi = addActiveState(Li);

type props = {};

export const MainNav = (props: {}) =>
  <Nav {...props}>
    <Ul {...props}>
      <ActiveLi>
        <Highlight url="/">Projects</Highlight>
      </ActiveLi>
      <ActiveLi><Highlight url="/">About</Highlight></ActiveLi>
      <ActiveLi>
        <Chevron>Download</Chevron>
        <Bubble
          textItems={[
            { label: "Resume", target: "#" },
            { label: "Portfolio", target: "#" }
          ]}
        />
      </ActiveLi>
      <ActiveLi><Highlight url="/">Contact</Highlight></ActiveLi>
    </Ul>
    <Ul {...props}>
      <ActiveLi><LinkedInIcon /></ActiveLi>
      <ActiveLi><OctocatIcon /></ActiveLi>
    </Ul>

  </Nav>;
