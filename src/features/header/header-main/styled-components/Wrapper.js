//@flow

import styled, { css } from "styled-components";

export const Wrapper = styled.div`

  ${({ theme }: { theme: Theme }) => css`

    box-sizing: border-box;
    position: relative;
    width: 100%;
    background-color: ${theme.color.background};
    padding: 1em ${theme.scale.s4()};
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    
  `}
`;
