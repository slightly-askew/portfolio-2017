//@flow

import React from "react";
import { compose, onlyUpdateForKeys } from "recompose";
import { Svg, Circle, Highlight, In } from "./styled-components";

const enhanced = compose(onlyUpdateForKeys(["isActive"]));

export const Logo = enhanced(({ isActive }: { isActive: boolean }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 480">
    <Circle />
    <Highlight isActive={isActive} />
    <In isActive={isActive} />
  </Svg>
));
