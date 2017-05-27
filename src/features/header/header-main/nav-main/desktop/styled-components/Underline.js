//@flow

import styled, { css } from "styled-components";

export const Underline = styled.span`

  ${({ isActive, theme }) => `
    position: relative;
    &:before {
      z-index: -1;
      display: block;
      content: "";
      height: ${theme.scale.s3(-2)};
      bottom: -${theme.scale.s3(-10)};
      background-color: ${theme.color.primary};
      position: absolute;
      width: 100%;
      transform-origin: bottom left;
      transform: scaleX(0);
      will-change: transform;
      transition: all 0.1s ease-out;
      ${isActive && css`
        transform: scaleX(1);
      `}
    }
 `}
`;
