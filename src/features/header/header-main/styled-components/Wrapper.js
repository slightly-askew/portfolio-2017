//@flow

import styled, { css } from "styled-components";

export const Wrapper = styled.div`

  ${({ theme }: { theme: Theme }) => css`

    box-sizing: border-box;
    position: relative;
    width: 100%;
    background-color: ${theme.color.background};
    padding: 1em ${theme.scale.s8()};
    display: flex;
    align-items: baseline;

    & > .mobile-menu-button__svg {
      top: ${theme.scale.s1(1)};
      margin-top: -${theme.scale.s1()};
      margin-right: -3em;
      height: ${theme.scale.s3(4)};
      width: auto;
      left: -5em;
      flex-shrink: 0;
    }
  `}
`;
