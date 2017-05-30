//@flow

import React from "react";
import { Path, Svg } from "./styled-components";

export const ChevronSvg = (props: {}): React$Element<*> => (
  <Svg {...props}>
    <Path {...props} />
  </Svg>
);
