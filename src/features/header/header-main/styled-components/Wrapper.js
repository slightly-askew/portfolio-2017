//@flow

import styled, { css } from "styled-components";

export const Wrapper = styled.div`

  ${({ theme }: { theme: Theme }) => css`

    box-sizing: border-box;
    position: relative;
    width: 100%;
    background-color: ${theme.color.background};
    
  `}
`;
