//@flow

import styled, { css } from "styled-components";

export const Underline = styled.span`

  ${({ isActive, theme, highlightColor }: { isActive: boolean, theme: Theme, highlightColor: string }) => {
    const textColor = theme.color.black;
    return css`
    position: relative;
    &:before {
      z-index: -1;
      display: block;
      content: "";
      height: ${theme.scale.s3(-2)};
      bottom: -${theme.scale.s3(-10)};
      background-color: ${highlightColor || theme.color.primary};
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
    & > a {
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      color: ${textColor};
      will-change: transform color;
      transition: all 0.1s ease-out;
      transform-origin: center center;
      ${isActive && css`
        color: ${theme.effect.darken(0.4, textColor)};
        transform: scale(1.04);
      `}
    }
 `;
  }}
`;
