//@flow

import styled, { css } from "styled-components";

export const Highlight = styled.rect.attrs({
  width: "520",
  height: "136",
  y: "270"
})`
  ${({ theme, isActive }: { theme: Theme, isActive: boolean }) => css`

    fill: ${theme.color.pink};
    opacity: 0.8;
    will-change: transform;
    transition: transform 0.1s ease-in-out;
    transform: scaleX(0);
    transform-origin: 0px 340px;
    ${isActive && css`transform: scaleX(1);`};

  `}
`;
