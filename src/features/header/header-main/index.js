//@flow

import React from "react";
import { Title, Wrapper } from "./styled-components";
//import theme from themefolder

export const HeaderMain = ({ ...props }: {}): React$Element<*> => (
  <Wrapper>
    <Title>Oliver Askew</Title>
  </Wrapper>
);
