//@flow

import React from "react";
import { ThemeProvider } from "styled-components";
import { Title, Wrapper } from "./styled-components";
//import theme from themefolder

export default ({ ...props }: { prop: mixed }): React$Element<*> => (
  <ThemeProvider>
    <Wrapper>
      <Title>Oliver Askew</Title>
    </Wrapper>
  </ThemeProvider>
);
