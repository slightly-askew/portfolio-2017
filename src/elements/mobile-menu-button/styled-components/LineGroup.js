//@flow

import styled, { css } from "styled-components";

export const LineGroup = styled.g`
  stroke-width: 2.25;
  stroke-linecap: round;
  will-change: stroke;
  transition: stroke 0.2s;
  transform: translate(9px,1px);
  ${({ theme }: { theme: Theme }) => css`
    stroke: ${theme.color.black};
    &:hover {
      stroke: ${theme.effect.darken(0.2, theme.color.black)};
    }
  `}
`;
