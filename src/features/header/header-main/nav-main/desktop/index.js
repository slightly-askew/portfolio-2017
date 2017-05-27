//@flow
import React from "react";

import { Ul, Li, Nav } from "./styled-components";
import { ListItem } from "./ListItem";

export const DesktopNav = () => (
  <Nav>
    <Ul>
      <ListItem>Projects</ListItem>
      <ListItem>About</ListItem>
      <Li>Downloads</Li>
      <ListItem>Contact</ListItem>
    </Ul>
  </Nav>
);
